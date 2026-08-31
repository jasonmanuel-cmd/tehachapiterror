// ---------------------------------------------------------------------------
// MOCK CONTENT — placeholder copy & data for the Tehachapi Terror rebuild.
// Every value here is a stand-in. Swap in the real copy, photos, prices,
// and dates before launch. Nothing here was pulled from the live site —
// it's structured to match what a haunted-house attraction site needs.
// ---------------------------------------------------------------------------

export const brand = {
  name: "Tehachapi Terror",
  shortName: "TEHACHAPI TERROR",
  tagline: "Tehachapi's Most Feared Night of the Year",
  since: 2013,
};

export const hero = {
  eyebrow: "Now Casting Nightmares",
  headline: "SURVIVE THE NIGHT.",
  subheadline:
    "A full-scale haunted attraction built in the hills above Tehachapi. Real scares, real actors, real dread — not for the faint of heart.",
  ctaPrimary: "Buy Tickets",
  ctaSecondary: "Watch the Trailer",
};

export const story = {
  heading: "A Local Legend, Reborn",
  paragraphs: [
    "Tehachapi Terror started in a backyard garage over a decade ago and grew into one of the region's largest haunted attractions — built, acted, and run by people who live for this one night of the year.",
    "Every room is designed and built by hand by our crew, every scare rehearsed, every corner considered. What began as a neighborhood tradition is now a Halloween destination for the whole valley.",
    "This year we're bringing the same twisted love for the season into a new, modern home online — same house, same scares, same family running it.",
  ],
  stats: [
    { value: "12+", label: "Years Running" },
    { value: "20,000+", label: "Screams Survived" },
    { value: "3", label: "Haunted Attractions" },
    { value: "40", label: "Cast & Crew" },
  ],
};

export const attractions = [
  {
    id: "asylum",
    name: "The Asylum",
    description:
      "Abandoned wards, flickering lights, and patients who never checked out. Not recommended for those with a fear of tight spaces.",
    intensity: 4,
  },
  {
    id: "hollow",
    name: "Blackwood Hollow",
    description:
      "A walk through the woods that surround the old Blackwood homestead — if the trees don't get you, the things living under them will.",
    intensity: 3,
  },
  {
    id: "harvest",
    name: "The Harvest",
    description:
      "A cornfield maze at dusk that becomes something else entirely once the sun goes down.",
    intensity: 5,
  },
];

export const hours = {
  season: "Late September – November 1",
  note: "Hours extend on weekends and the week of Halloween. Check the calendar before you drive out.",
  schedule: [
    { days: "Thursdays", time: "7:00 PM – 11:00 PM" },
    { days: "Fridays & Saturdays", time: "7:00 PM – 1:00 AM" },
    { days: "Sundays", time: "7:00 PM – 10:00 PM" },
    { days: "Halloween Night (Oct 31)", time: "6:00 PM – 1:00 AM" },
  ],
};

export const tickets = [
  {
    id: "general",
    name: "General Admission",
    price: "$25",
    description: "Access to all three attractions, one time through.",
    featured: false,
  },
  {
    id: "fast-pass",
    name: "Fast Pass",
    price: "$45",
    description: "Skip the line all night long. Access to all three attractions.",
    featured: true,
  },
  {
    id: "vip-group",
    name: "VIP Group (6+)",
    price: "$120",
    description: "Private group entry, no wait, all three attractions.",
    featured: false,
  },
];

export const faqs = [
  {
    question: "How scary is it, really?",
    answer:
      "Very. This isn't a kid-friendly haunt — expect actors in close contact, fog, strobe lighting, loud sound design, and tight, dark spaces. We recommend 13+ unless your kid genuinely loves being scared.",
  },
  {
    question: "How long does it take to get through?",
    answer:
      "Plan for 45–60 minutes total across all three attractions, longer on peak weekend nights depending on line volume.",
  },
  {
    question: "Is there parking on site?",
    answer:
      "Yes, free parking is available on site with staff directing traffic. Carpooling is encouraged on Friday and Saturday nights.",
  },
  {
    question: "Do you do refunds if it rains?",
    answer:
      "The haunt runs rain or shine — most of the attraction is covered. In the case of severe weather we'll post updates on our socials and honor tickets on another night.",
  },
  {
    question: "Can I touch the actors or will they touch me?",
    answer:
      "No touching the actors, and our actors won't touch you either — the scares come from proximity, environment, and surprise, not contact.",
  },
];

export const testimonials = [
  {
    quote: "Genuinely the best haunted house I've been to in California. My friend group still talks about the cornfield.",
    author: "Local Guest",
  },
  {
    quote: "The set design alone is worth the ticket. This isn't a garage haunt — it's a full production.",
    author: "Returning Visitor",
  },
  {
    quote: "We got separated in the Asylum and I'm still not over it. 10/10.",
    author: "Halloween Regular",
  },
];

export const gallery = [
  { id: 1, alt: "Fog-lit entrance to the haunted asylum set", placeholder: true },
  { id: 2, alt: "Actor in full makeup in Blackwood Hollow", placeholder: true },
  { id: 3, alt: "The cornfield maze at The Harvest, lit at dusk", placeholder: true },
  { id: 4, alt: "Crowd waiting in line at the entrance gate", placeholder: true },
  { id: 5, alt: "Close-up of prosthetic makeup on a haunt actor", placeholder: true },
  { id: 6, alt: "The haunted house exterior lit up at night", placeholder: true },
];

export const location = {
  address: "Tehachapi, CA",
  mapNote: "Exact address released with ticket purchase — follow the signs off Hwy 58.",
  phone: "(661) 555-0142",
  email: "scare@tehachapiterror.com",
  social: {
    instagram: "https://instagram.com/tehachapiterror",
    facebook: "https://facebook.com/tehachapiterror",
    tiktok: "https://tiktok.com/@tehachapiterror",
  },
};
