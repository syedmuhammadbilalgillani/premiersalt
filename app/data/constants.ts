import { IMG } from "./images";

export const COLORS = {
  CORAL: "#FF6268",
  NAVY: "#0C2340",
  IVORY: "#F4F2EF",
  SAND: "#EDE9E4",
  SLATE: "#73859F",
  CHARCOAL: "#222222",
};

export const NAV_ITEMS = [
  { label: "Shop", page: "shop" as const },
  { label: "About", page: "about" as const },
  { label: "Wholesale", page: "wholesale" as const },
  { label: "Journal", page: "journal" as const },
  { label: "Contact", page: "contact" as const },
];

export const MESSAGES = [
  "✨ Free shipping on orders over PKR 5,000",
  "🚀 Same-day dispatch available in Lahore",
  "💎 Premium Himalayan salt from Khewra",
];

export const STATS_DATA = [
  { v: 40, suf: "+", l: "Years of Heritage" },
  { v: 90, suf: "+", l: "Countries Served" },
  { v: 150, suf: "+", l: "M.Ton Daily Production" },
  { v: 400, suf: "+", l: "Global Partners" },
];

export const STEPS = [
  {
    label: "Mined at Khewra",
    desc: "Deep within the Salt Range mountains of Pakistan, workers extract salt using hand methods unchanged for centuries — preserving the mineral integrity developed over 250 million years.",
    img: IMG.cave,
  },
  {
    label: "Hand-sorted & Inspected",
    desc: "Every batch is carefully sorted by hand. Only the finest, most translucent pink crystals proceed. Defects are caught before they ever reach processing.",
    img: IMG.crystals,
  },
  {
    label: "Crafted & Shaped",
    desc: "Ground fine for cooking, carved into lamps, or cut into grill slabs — our artisans shape each product with precision tools and generations of accumulated knowledge.",
    img: IMG.texture,
  },
  {
    label: "Packed & Certified",
    desc: "Hygienically packed under ISO 9001 and FDA-compliant conditions, with full traceability documentation for every international wholesale shipment.",
    img: IMG.packaging,
  },
  {
    label: "Delivered Worldwide",
    desc: "From our facility near Islamabad, certified shipments reach 90+ countries by sea and air. White-label and private-label options available for retail partners globally.",
    img: IMG.mountain,
  },
];

export const CERTS = [
  "ISO 9001 Certified",
  "FDA Registered",
  "Kosher Certified",
  "Halal Certified",
  "GFSI Compliant",
  "Gluten-Free",
  "Vegan Friendly",
  "ISO 22000",
];

export const CATEGORIES = [
  {
    name: "Edible",
    desc: "Premium table salts, spice blends",
    icon: "Spoon",
    products: 3,
  },
  {
    name: "Lamps",
    desc: "Hand-carved salt lamps for ambiance",
    icon: "Lightbulb",
    products: 2,
  },
  {
    name: "Spa",
    desc: "Bath salts and body treatments",
    icon: "Droplet",
    products: 2,
  },
  {
    name: "Grill",
    desc: "Cooking slabs and serving boards",
    icon: "Flame",
    products: 1,
  },
];

export const CATS = [
  {
    label: "Edible & Gourmet Salt",
    sub: "Fine grain, coarse & blends",
    img: IMG.gourmet,
    span: "lg:col-span-2 lg:row-span-1",
  },
  {
    label: "Salt Lamps & Decor",
    sub: "Hand-carved, natural glow",
    img: IMG.lamp,
    span: "lg:col-span-1 lg:row-span-2",
  },
  {
    label: "Grill Plates & Slabs",
    sub: "Cook, sear & serve on salt",
    img: IMG.texture,
    span: "lg:col-span-1",
  },
  {
    label: "Bath & Spa Salt",
    sub: "Detox, soften & restore",
    img: IMG.spa,
    span: "lg:col-span-1",
  },
];

export const TESTIMONIALS = [
  {
    q: "Premier Salt's private-label program is the most seamless we've worked with in fifteen years of sourcing. Quality is absolutely consistent — our European retail chain has never had a single rejection.",
    name: "Marcus Hoffmann",
    co: "NaturaPure GmbH, Germany",
    initials: "MH",
  },
  {
    q: "The Khewra pink salt they supply for our wellness line has become our best-selling SKU three years running. Their export documentation is always immaculate.",
    name: "Sarah Lin",
    co: "Vitazen Health, USA",
    initials: "SL",
  },
  {
    q: "We switched from three different suppliers to Premier Salt exclusively. Their responsiveness and the consistency of the grill slabs is unmatched in the industry.",
    name: "Tariq Al-Rashidi",
    co: "Al Baraka Foods, UAE",
    initials: "TR",
  },
];

export const PROVINCES = [
  "Islamabad",
  "Lahore",
  "Karachi",
  "Rawalpindi",
  "Multan",
  "Faisalabad",
  "Peshawar",
  "Quetta",
  "Hyderabad",
  "Gujranwala",
];

export const POSTS = [
  {
    cat: "Origins",
    title: "How the Khewra mine became the world's largest pink salt deposit",
    excerpt:
      "250 million years ago, an ancient sea evaporated in what is now northern Pakistan.",
    img: IMG.journal1,
    date: "June 2025",
  },
  {
    cat: "Wellness",
    title: "The science behind Himalayan salt's 84 trace minerals",
    excerpt: "What each mineral does for your body — and for your cooking.",
    img: IMG.journal2,
    date: "May 2025",
  },
  {
    cat: "Sustainability",
    title: "Mining without destroying: our responsible extraction pledge",
    excerpt:
      "Khewra has supplied the world for 700 years. We intend it to supply 700 more.",
    img: IMG.journal3,
    date: "April 2025",
  },
];

export const COLLECTION = [
  {
    label: "Edible Salt",
    img: IMG.gourmet,
    sub: "Fine, coarse & gourmet blends",
  },
  {
    label: "Salt Lamps",
    img: IMG.lamp,
    sub: "Hand-carved, warm-glow ambience",
  },
  { label: "Spa & Bath", img: IMG.spa, sub: "Detox soaks and mineral scrubs" },
  {
    label: "Grill Slabs",
    img: IMG.texture,
    sub: "Cook, sear and serve on salt",
  },
  {
    label: "Gift Sets",
    img: IMG.pink2,
    sub: "Curated collections, beautifully packed",
  },
];

// Provinces of Pakistan used on the checkout form (distinct from PROVINCES
// above, which is a list of major cities used elsewhere).
export const CHECKOUT_PROVINCES = [
  "Punjab",
  "Sindh",
  "Khyber Pakhtunkhwa",
  "Balochistan",
  "Islamabad Capital Territory",
  "Azad Jammu & Kashmir",
  "Gilgit-Baltistan",
];

// Full list of Journal posts used on the /journal listing page (distinct from
// POSTS above, which is the shorter teaser list shown on the home page).
export const ALL_POSTS = [
  {
    cat: "Origins",
    title: "How the Khewra mine became the world's largest pink salt deposit",
    excerpt:
      "250 million years ago, an ancient sea evaporated in what is now northern Pakistan. The minerals left behind would take centuries to be discovered, and centuries more to reach kitchens around the world.",
    img: IMG.journal1,
    date: "June 2025",
    read: "6 min",
  },
  {
    cat: "Wellness",
    title: "The science behind Himalayan salt's 84 trace minerals",
    excerpt:
      "Every crystal of Himalayan pink salt carries 84 naturally occurring trace minerals. Here's what each of the significant ones actually does — for your body and for your cooking.",
    img: IMG.journal2,
    date: "May 2025",
    read: "5 min",
  },
  {
    cat: "Sustainability",
    title: "Mining without destroying: our responsible extraction pledge",
    excerpt:
      "Khewra has supplied the world for 700 years. We intend it to supply 700 more. Our room-and-pillar extraction method, zero-discharge water system, and reforestation programme are how we plan to keep that promise.",
    img: IMG.journal3,
    date: "April 2025",
    read: "7 min",
  },
  {
    cat: "Recipes",
    title: "Five ways to cook on a Himalayan salt slab",
    excerpt:
      "A salt slab is not just a serving board — it's a cooking vessel, a temperature regulator, and a seasoner all at once. Here's what you can actually do with one beyond just Instagram photos.",
    img: IMG.texture,
    date: "March 2025",
    read: "8 min",
  },
  {
    cat: "Trade",
    title: "How private-label salt became a billion-dollar wellness trend",
    excerpt:
      "A decade ago, most consumers had never heard of Himalayan salt. Today it's on every supermarket shelf in 60 countries. Who built that market, and what does it mean for responsible sourcing?",
    img: IMG.crystals,
    date: "Feb 2025",
    read: "9 min",
  },
  {
    cat: "Origins",
    title:
      "A short history of the Khewra mine: from Alexander the Great to today",
    excerpt:
      "The mine's origin story is often traced to Alexander the Great's horses licking the ground here in 320 BC. The full history is stranger, older, and more interesting than that.",
    img: IMG.cave,
    date: "Jan 2025",
    read: "10 min",
  },
];
