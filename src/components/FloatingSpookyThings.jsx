import { useMemo } from "react";
import { GhostIcon, BatIcon, PumpkinIcon, SpiderIcon } from "./spookySprites";

const ICONS = {
  ghost: GhostIcon,
  bat: BatIcon,
  pumpkin: PumpkinIcon,
  spider: SpiderIcon,
};

const COLORS = {
  ghost: "text-bone/70",
  bat: "text-charcoal/90",
  pumpkin: "text-ember/80",
  spider: "text-charcoal",
};

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function buildSprite(type, i) {
  return {
    key: `${type}-${i}`,
    type,
    top: `${rand(4, 90)}%`,
    left: `${rand(2, 94)}%`,
    size: rand(28, 64),
    duration: rand(22, 48),
    delay: rand(-20, 0),
    dx1: `${rand(-60, 60)}px`,
    dy1: `${rand(-40, 40)}px`,
    dx2: `${rand(-90, 90)}px`,
    dy2: `${rand(-60, 60)}px`,
    dx3: `${rand(-60, 60)}px`,
    dy3: `${rand(-40, 40)}px`,
    rot1: `${rand(-8, 8)}deg`,
    rot2: `${rand(-8, 8)}deg`,
    opacity: rand(0.15, 0.5),
  };
}

// A fixed-position layer of drifting ghosts, bats, pumpkins, and spiders
// that wander slowly and independently across the whole page. Purely
// decorative — aria-hidden — and count-limited to stay light on layout.
export default function FloatingSpookyThings({
  counts = { ghost: 4, bat: 6, pumpkin: 3, spider: 2 },
}) {
  const sprites = useMemo(() => {
    const list = [];
    Object.entries(counts).forEach(([type, count]) => {
      for (let i = 0; i < count; i++) list.push(buildSprite(type, i));
    });
    return list;
  }, [counts]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {sprites.map((s) => {
        const Icon = ICONS[s.type];
        return (
          <div
            key={s.key}
            className="spooky-sprite absolute"
            style={{
              top: s.top,
              left: s.left,
              "--duration": `${s.duration}s`,
              "--delay": `${s.delay}s`,
              "--dx1": s.dx1,
              "--dy1": s.dy1,
              "--dx2": s.dx2,
              "--dy2": s.dy2,
              "--dx3": s.dx3,
              "--dy3": s.dy3,
              "--rot1": s.rot1,
              "--rot2": s.rot2,
            }}
          >
            <Icon
              className={COLORS[s.type]}
              style={{ width: s.size, height: s.size, opacity: s.opacity }}
            />
          </div>
        );
      })}
    </div>
  );
}
