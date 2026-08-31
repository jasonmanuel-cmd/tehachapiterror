import { useEffect, useRef } from "react";

// Soft, slow-drifting fog blobs rendered on canvas. Sits fixed behind all
// page content. Pauses when the tab isn't visible and respects
// prefers-reduced-motion by freezing on a single static frame.
const PLUMES = 10;

function makePlume(width, height) {
  return {
    x: Math.random() * width,
    y: height * 0.35 + Math.random() * height * 0.65,
    radius: 220 + Math.random() * 340,
    speedX: (Math.random() - 0.5) * 0.12,
    speedY: (Math.random() - 0.5) * 0.05,
    drift: Math.random() * Math.PI * 2,
    driftSpeed: 0.0003 + Math.random() * 0.0004,
    hueMix: Math.random(),
    opacity: 0.05 + Math.random() * 0.07,
  };
}

export default function SmokeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let plumes = Array.from({ length: PLUMES }, () => makePlume(width, height));
    let frameId;
    let visible = true;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#07050a";
      ctx.fillRect(0, 0, width, height);

      for (const p of plumes) {
        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, p.radius
        );
        const warm = `rgba(138, 15, 31, ${p.opacity})`;
        const cool = `rgba(30, 15, 45, ${p.opacity})`;
        gradient.addColorStop(0, p.hueMix > 0.6 ? warm : cool);
        gradient.addColorStop(1, "rgba(7, 5, 10, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function step() {
      if (!visible) {
        frameId = requestAnimationFrame(step);
        return;
      }
      for (const p of plumes) {
        p.drift += p.driftSpeed;
        p.x += p.speedX + Math.sin(p.drift) * 0.15;
        p.y += p.speedY + Math.cos(p.drift * 0.7) * 0.08;

        if (p.x < -p.radius) p.x = width + p.radius;
        if (p.x > width + p.radius) p.x = -p.radius;
        if (p.y < -p.radius) p.y = height + p.radius;
        if (p.y > height + p.radius) p.y = -p.radius;
      }
      draw();
      frameId = requestAnimationFrame(step);
    }

    draw();
    if (!reduceMotion) {
      frameId = requestAnimationFrame(step);
    }

    function handleVisibility() {
      visible = document.visibilityState === "visible";
    }

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-20 h-full w-full"
    />
  );
}
