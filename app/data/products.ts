import { Product } from "@/types";
import { IMG } from "./images";

export const ALL_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Fine Himalayan Pink Salt",
    price: 850,
    category: "Edible",
    rating: 4.8,
    reviews: 124,
    img: IMG.pink2,
    imgs: [IMG.pink2, IMG.crystals, IMG.texture],
    weight: ["250g", "500g", "1kg", "5kg"],
    short:
      "Finely ground, mineral-rich Himalayan pink salt from the Khewra mines.",
    description:
      "Our fine-grain Himalayan pink salt is hand-mined from the ancient Khewra Salt Range and stone-ground to a pure, uniform grain. It carries 84 naturally occurring trace minerals that give it its distinctive blush tone and subtle mineral depth. Use freely in cooking, at the table, or in salt mills.",
    shipping:
      "Dispatched within 2 business days. Free nationwide delivery on orders over PKR 5,000. Cash on Delivery available across all major cities.",
  },
  {
    id: 2,
    name: "Natural Salt Lamp (3 kg)",
    price: 2200,
    category: "Lamps",
    rating: 4.9,
    reviews: 89,
    img: IMG.lamp,
    imgs: [IMG.lamp, IMG.lamp2, IMG.crystals],
    weight: ["2kg", "3kg", "5kg"],
    short:
      "Hand-carved natural Himalayan salt lamp with wooden base and bulb included.",
    description:
      "Each lamp is a unique formation of Himalayan salt crystal, hand-carved by artisans in Lahore and fitted with a warm-filament bulb. The soft pink-amber glow creates an immediate sense of calm. Salt lamps naturally absorb ambient moisture and release negative ions, making them as functional as they are beautiful.",
    shipping:
      "Dispatched within 3 business days, carefully bubble-wrapped. Free shipping on orders over PKR 5,000. Cash on Delivery available.",
  },
  {
    id: 3,
    name: "Gourmet Salt Grinder Set",
    price: 1650,
    category: "Edible",
    rating: 4.7,
    reviews: 56,
    img: IMG.gourmet,
    imgs: [IMG.gourmet, IMG.pink3, IMG.crystals],
    weight: ["2×150g", "2×300g"],
    short:
      "Two adjustable acrylic grinders pre-filled with coarse pink salt and a peppercorn blend.",
    description:
      "A chef-approved table set: one grinder of coarse Himalayan pink salt, one of our house black pepper blend. Adjustable ceramic grinding mechanism, durable acrylic body, elegant enough for a restaurant table and practical enough for daily use. Refillable.",
    shipping:
      "Gift-boxed and dispatched within 2 business days. Free nationwide delivery over PKR 5,000. Cash on Delivery available.",
  },
  {
    id: 4,
    name: "Himalayan Bath Salt 500 g",
    price: 680,
    category: "Spa",
    rating: 4.8,
    reviews: 211,
    img: IMG.spa,
    imgs: [IMG.spa, IMG.crystals, IMG.pink2],
    weight: ["500g", "1kg", "2kg"],
    short:
      "Coarse bath salt with lavender and rose extracts for deep mineral soaking.",
    description:
      "A restorative mineral soak blending coarse Himalayan salt with cold-pressed lavender and Bulgarian rose. Dissolve 3–4 tablespoons in a warm bath and soak for 20 minutes. The magnesium and trace minerals help ease muscle tension; the botanicals calm the senses. Free of artificial fragrance.",
    shipping:
      "Dispatched within 2 business days. Free delivery on orders over PKR 5,000. Cash on Delivery available across Pakistan.",
  },
  {
    id: 5,
    name: "Grill Slab 20×30 cm",
    price: 3400,
    category: "Grill",
    rating: 4.6,
    reviews: 43,
    img: IMG.texture,
    imgs: [IMG.texture, IMG.cave, IMG.packaging],
    weight: ["20×20cm", "20×30cm", "30×40cm"],
    short:
      "Thick Himalayan salt slab for direct-heat grilling, serving, and chilling.",
    description:
      "A 4cm thick block of solid Himalayan salt cut and polished in our Lahore facility. Heat directly on a gas burner or in an oven to 250°C; the salt conducts heat evenly and imparts a light mineral seasoning to whatever you cook. Equally stunning as a cold serving board for charcuterie, cheese, or sushi.",
    shipping:
      "Dispatched within 3–5 business days. Shipped in reinforced wooden crates. Cash on Delivery available.",
  },
  {
    id: 6,
    name: "Coarse Pink Salt 1 kg",
    price: 420,
    category: "Edible",
    rating: 4.9,
    reviews: 302,
    img: IMG.pink3,
    imgs: [IMG.pink3, IMG.crystals, IMG.pink2],
    weight: ["500g", "1kg", "5kg", "10kg"],
    short: "Coarse Himalayan pink salt, ideal for mills, rubs, and pickling.",
    description:
      "The same mineral-rich crystal as our fine salt, left in a coarser irregular grain ideal for salt mills, dry rubs, brine solutions, and slow-cooking applications where the salt dissolves gradually into the dish. Unrefined, unbleached, with no anti-caking agents.",
    shipping:
      "Dispatched within 2 business days. Free delivery over PKR 5,000. Cash on Delivery available.",
  },
  {
    id: 7,
    name: "Detox Body Scrub 300 g",
    price: 950,
    category: "Spa",
    rating: 4.7,
    reviews: 78,
    img: IMG.spoon,
    imgs: [IMG.spoon, IMG.spa, IMG.crystals],
    weight: ["150g", "300g"],
    short:
      "Exfoliating mineral scrub with Himalayan salt, coconut oil, and eucalyptus.",
    description:
      "A head-to-toe exfoliant that combines medium-grain Himalayan salt with cold-pressed coconut oil, shea butter, and eucalyptus essential oil. Massage onto damp skin in circular motions, then rinse. Leaves skin silky, lightly scented, and visibly renewed. Sulfate-free, paraben-free.",
    shipping:
      "Dispatched within 2 business days. Free delivery over PKR 5,000. Cash on Delivery available.",
  },
  {
    id: 8,
    name: "USB Salt Lamp (Heart Shape)",
    price: 1200,
    category: "Lamps",
    rating: 4.8,
    reviews: 156,
    img: IMG.lamp2,
    imgs: [IMG.lamp2, IMG.lamp, IMG.crystals],
    weight: ["0.8kg", "1.2kg"],
    short:
      "Heart-shaped Himalayan salt lamp with USB power cord, ideal for desks and gifting.",
    description:
      "A compact heart-shaped salt lamp designed for desk use — powered by USB so there's no bulky cord or adapter to manage. Warm amber glow, hand-carved from genuine Himalayan crystal. Comes in a premium gift box with a ribbon. A perfect gift for wellness enthusiasts and homes alike.",
    shipping:
      "Gift-boxed. Dispatched within 2 days. Cash on Delivery available.",
  },
];
