"use client";
import {
  useState,
  useEffect,
  useRef,
  useCallback,
  createContext,
  useContext,
} from "react";
import { motion } from "motion/react";
import {
  Search,
  User,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Star,
  Plus,
  Minus,
  ArrowRight,
  Check,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Package,
  Truck,
  Shield,
  Clock,
  ZoomIn,
} from "lucide-react";
import { Divider } from "./components/ui/divider";

// ─── Palette ──────────────────────────────────────────────────────────────────
const CORAL = "#FF6268";
const NAVY = "#0C2340";
const IVORY = "#F4F2EF";
const SAND = "#EDE9E4";
const SLATE = "#73859F";
const CHARCOAL = "#222222";

// ─── Image pool ───────────────────────────────────────────────────────────────
const IMG = {
  hero: "https://images.unsplash.com/photo-1614759258004-39da973d3268?w=1800&h=1100&fit=crop&auto=format",
  crystals:
    "https://images.unsplash.com/photo-1629285464605-8e6493153fdb?w=900&h=700&fit=crop&auto=format",
  texture:
    "https://images.unsplash.com/photo-1660159211965-2be37abdc121?w=900&h=700&fit=crop&auto=format",
  lamp: "https://images.unsplash.com/photo-1623241923490-5b2fd532828f?w=700&h=900&fit=crop&auto=format",
  lamp2:
    "https://images.unsplash.com/photo-1692246428001-84504043e157?w=700&h=900&fit=crop&auto=format",
  spa: "https://images.unsplash.com/photo-1776482128017-29e0fe8b46fc?w=700&h=900&fit=crop&auto=format",
  gourmet:
    "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=900&h=700&fit=crop&auto=format",
  mountain:
    "https://images.unsplash.com/photo-1653163517210-2e3b56190680?w=1200&h=800&fit=crop&auto=format",
  cave: "https://images.unsplash.com/photo-1733673640316-bf1b65691c2e?w=900&h=700&fit=crop&auto=format",
  packaging:
    "https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?w=900&h=700&fit=crop&auto=format",
  pink2:
    "https://images.unsplash.com/photo-1612708043745-7a5526b5f7c0?w=700&h=700&fit=crop&auto=format",
  pink3:
    "https://images.unsplash.com/photo-1616450121126-7c0b5e157524?w=700&h=700&fit=crop&auto=format",
  journal1:
    "https://images.unsplash.com/photo-1697464169504-d5b3e9a88212?w=700&h=500&fit=crop&auto=format",
  journal2:
    "https://images.unsplash.com/photo-1606791450998-d3859ac80814?w=700&h=500&fit=crop&auto=format",
  journal3:
    "https://images.unsplash.com/photo-1629565994332-403fc923b178?w=700&h=500&fit=crop&auto=format",
  story:
    "https://images.unsplash.com/photo-1695405919988-638139ec112a?w=700&h=500&fit=crop&auto=format",
  pakistan:
    "https://images.unsplash.com/photo-1697464169504-d5b3e9a88212?w=1200&h=600&fit=crop&auto=format",
  spoon:
    "https://images.unsplash.com/photo-1680128435281-30bf87b50ad5?w=700&h=700&fit=crop&auto=format",
};

// ─── Product catalogue ────────────────────────────────────────────────────────
type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating: number;
  reviews: number;
  img: string;
  imgs: string[];
  weight: string[];
  short: string;
  description: string;
  shipping: string;
};

const ALL_PRODUCTS: Product[] = [
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

// ─── Cart types ───────────────────────────────────────────────────────────────
type CartItem = { product: Product; qty: number; weight: string };

// ─── App context ──────────────────────────────────────────────────────────────
type Page =
  | "home"
  | "shop"
  | "product"
  | "checkout"
  | "confirmation"
  | "about"
  | "contact"
  | "journal"
  | "wholesale";

type AppCtx = {
  page: Page;
  navigate: (p: Page, extra?: Record<string, unknown>) => void;
  cart: CartItem[];
  addToCart: (p: Product, weight: string) => void;
  removeFromCart: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  cartOpen: boolean;
  setCartOpen: (v: boolean) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (p: Product | null) => void;
};

const Ctx = createContext<AppCtx>(null as unknown as AppCtx);
const useApp = () => useContext(Ctx);



function BrandMark() {
  return (
    <div className="mb-5">
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="13" stroke={NAVY} strokeWidth="0.75" />
        <path
          d="M14 7L14 21M8 10.5L20 17.5M20 10.5L8 17.5"
          stroke={NAVY}
          strokeWidth="0.75"
          strokeLinecap="round"
        />
        <circle cx="14" cy="14" r="2" fill={NAVY} />
      </svg>
    </div>
  );
}

function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      style={{
        fontFamily: "Inter,sans-serif",
        fontWeight: 500,
        fontSize: 10,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: light ? "rgba(244,242,239,0.45)" : SLATE,
        marginBottom: 10,
      }}
    >
      {children}
    </p>
  );
}

function TextLink({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "Inter,sans-serif",
        fontSize: 12,
        color: NAVY,
        textDecoration: "underline",
        textUnderlineOffset: 3,
        textDecorationColor: "rgba(12,35,64,0.3)",
        letterSpacing: "0.03em",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
      }}
    >
      {children}
    </button>
  );
}

function PrimaryBtn({
  children,
  onClick,
  type = "button",
  fullWidth = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  fullWidth?: boolean;
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.025, opacity: 0.92 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "11px 28px",
        background: CORAL,
        color: IVORY,
        fontFamily: "Inter,sans-serif",
        fontWeight: 500,
        fontSize: 10,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        border: "none",
        cursor: "pointer",
        width: fullWidth ? "100%" : undefined,
        justifyContent: fullWidth ? "center" : undefined,
      }}
    >
      {children}
    </motion.button>
  );
}

function NavyBtn({
  children,
  onClick,
  fullWidth = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.025, opacity: 0.9 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "11px 28px",
        background: NAVY,
        color: IVORY,
        fontFamily: "Inter,sans-serif",
        fontWeight: 500,
        fontSize: 10,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        border: "none",
        cursor: "pointer",
        width: fullWidth ? "100%" : undefined,
        justifyContent: fullWidth ? "center" : undefined,
      }}
    >
      {children}
    </motion.button>
  );
}

function OutlineBtn({
  children,
  onClick,
  light = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  light?: boolean;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.025, opacity: 0.75 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "11px 28px",
        background: "transparent",
        border: `1px solid ${light ? "rgba(244,242,239,0.45)" : NAVY}`,
        color: light ? IVORY : NAVY,
        fontFamily: "Inter,sans-serif",
        fontWeight: 500,
        fontSize: 10,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        cursor: "pointer",
      }}
    >
      {children}
    </motion.button>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={11}
          fill={i < Math.floor(rating) ? CORAL : "none"}
          color={CORAL}
        />
      ))}
    </div>
  );
}

// ─── Motion utilities ─────────────────────────────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

// ─── 1. Announcement Bar ──────────────────────────────────────────────────────
const MESSAGES = [
  "Free shipping on retail orders over PKR 5,000",
  "Now shipping to 90+ countries worldwide",
  "Cash on Delivery available across Pakistan",
];

function AnnouncementBar() {
  const [idx, setIdx] = useState(0);
  const [vis, setVis] = useState(true);
  useEffect(() => {
    const t = setInterval(() => {
      setVis(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % MESSAGES.length);
        setVis(true);
      }, 350);
    }, 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <div
      style={{ background: NAVY, height: 36 }}
      className="flex items-center justify-center overflow-hidden z-50 relative"
    >
      <span
        style={{
          fontFamily: "Inter,sans-serif",
          fontWeight: 400,
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: IVORY,
          transition: "opacity 0.35s",
          opacity: vis ? 1 : 0,
        }}
      >
        {MESSAGES[idx]}
      </span>
    </div>
  );
}

// ─── 2. Header ─────────────────────────────────────────────────────────────────
const MEGA: Record<
  string,
  { cols: { title: string; img: string; links: { label: string }[] }[] }
> = {
  Shop: {
    cols: [
      {
        title: "Edible & Gourmet",
        img: IMG.gourmet,
        links: [
          { label: "Fine Grain Salt" },
          { label: "Coarse Salt" },
          { label: "Grinders" },
          { label: "Blends" },
        ],
      },
      {
        title: "Salt Lamps",
        img: IMG.lamp,
        links: [
          { label: "Natural" },
          { label: "Carved" },
          { label: "USB" },
          { label: "Sets" },
        ],
      },
      {
        title: "Bath & Spa",
        img: IMG.spa,
        links: [
          { label: "Bath Salts" },
          { label: "Scrubs" },
          { label: "Soaks" },
          { label: "Gift Kits" },
        ],
      },
      {
        title: "Grill & Slabs",
        img: IMG.texture,
        links: [
          { label: "Grill Plates" },
          { label: "Serving Slabs" },
          { label: "Blocks" },
          { label: "Shot Glasses" },
        ],
      },
    ],
  },
  "Wholesale & Export": {
    cols: [
      {
        title: "Private Labeling",
        img: IMG.packaging,
        links: [
          { label: "Custom Branding" },
          { label: "MOQ Details" },
          { label: "Samples" },
          { label: "Label Design" },
        ],
      },
      {
        title: "Global Presence",
        img: IMG.mountain,
        links: [
          { label: "Export Markets" },
          { label: "Logistics" },
          { label: "Certifications" },
          { label: "Terms" },
        ],
      },
    ],
  },
  About: {
    cols: [
      {
        title: "Our Story",
        img: IMG.crystals,
        links: [
          { label: "Heritage Since 1980" },
          { label: "Mission" },
          { label: "Team" },
          { label: "Awards" },
        ],
      },
      {
        title: "Khewra Range",
        img: IMG.cave,
        links: [
          { label: "Mine Overview" },
          { label: "Geology" },
          { label: "Sustainability" },
          { label: "Tour" },
        ],
      },
    ],
  },
};

const NAV_ITEMS = [
  "Shop",
  "Wholesale & Export",
  "About",
  "Journal",
  "Contact",
] as const;
const NAV_PAGES: Record<string, Page> = {
  Shop: "shop",
  "Wholesale & Export": "wholesale",
  About: "about",
  Journal: "journal",
  Contact: "contact",
};

function Header({ scrolled, isHero }: { scrolled: boolean; isHero: boolean }) {
  const { page, navigate, cart, setCartOpen } = useApp();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);

  useEffect(() => {
    setMobile(false);
    setOpenMenu(null);
  }, [page]);

  const enter = (label: string) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setOpenMenu(MEGA[label] ? label : null);
  };
  const leave = () => {
    leaveTimer.current = setTimeout(() => setOpenMenu(null), 200);
  };

  const overHero = isHero && !scrolled;
  const textColor = overHero ? IVORY : NAVY;
  const subColor = overHero ? "rgba(244,242,239,0.6)" : CORAL;
  const bgStyle: React.CSSProperties = overHero
    ? {
        background: "rgba(12,35,64,0.22)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }
    : {
        background: IVORY,
        borderBottom: "1px solid rgba(12,35,64,0.08)",
        boxShadow: scrolled ? "0 2px 20px rgba(12,35,64,0.07)" : "none",
      };

  // placeholder to keep compiler happy — NAV_PAGES already declared above
  void 0;

  return (
    <>
      <header
        style={{
          ...bgStyle,
          transition: "background 0.3s ease, box-shadow 0.3s ease",
        }}
        className="sticky top-0 z-40"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center h-[60px] gap-4">
          {/* Logo */}
          <button
            onClick={() => navigate("home")}
            className="flex flex-col leading-none text-left flex-shrink-0 mr-6"
          >
            <span
              style={{
                fontFamily: "Fraunces,serif",
                fontWeight: 600,
                fontSize: 18,
                color: textColor,
                letterSpacing: "-0.01em",
                lineHeight: 1.1,
              }}
            >
              PREMIER
            </span>
            <span
              style={{
                fontFamily: "Inter,sans-serif",
                fontWeight: 400,
                fontSize: 8.5,
                letterSpacing: "0.3em",
                color: subColor,
                textTransform: "uppercase",
              }}
            >
              SALT INDUSTRIES
            </span>
          </button>

          {/* Desktop nav — centered */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {NAV_ITEMS.map((label) => {
              const active = page === NAV_PAGES[label];
              return (
                <div
                  key={label}
                  className="relative"
                  onMouseEnter={() => enter(label)}
                  onMouseLeave={leave}
                >
                  <button
                    onClick={() => navigate(NAV_PAGES[label])}
                    className="relative flex items-center gap-0.5 px-3 py-2"
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontWeight: active ? 500 : 400,
                      fontSize: 11,
                      letterSpacing: "0.13em",
                      textTransform: "uppercase",
                      color: active ? (overHero ? IVORY : CORAL) : textColor,
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {label}
                    {MEGA[label] && (
                      <ChevronDown
                        size={9}
                        style={{
                          opacity: 0.5,
                          transform:
                            openMenu === label ? "rotate(180deg)" : "none",
                          transition: "transform 0.2s",
                        }}
                      />
                    )}
                    <span
                      className="absolute bottom-0.5 left-3 right-3 h-px"
                      style={{
                        background: CORAL,
                        opacity: active ? 1 : 0,
                        transform: active ? "scaleX(1)" : "scaleX(0)",
                        transition: "opacity 0.2s, transform 0.2s",
                        transformOrigin: "left",
                      }}
                    />
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-1 ml-auto">
            <button
              onClick={() => {
                setSearchOpen((v) => !v);
                setMobile(false);
              }}
              className="hidden lg:flex w-9 h-9 items-center justify-center rounded-sm transition-colors hover:bg-black/5"
            >
              {searchOpen ? (
                <X size={15} style={{ color: textColor }} strokeWidth={1.5} />
              ) : (
                <Search
                  size={15}
                  style={{ color: textColor }}
                  strokeWidth={1.5}
                />
              )}
            </button>
            <button className="hidden lg:flex w-9 h-9 items-center justify-center rounded-sm transition-colors hover:bg-black/5">
              <User size={15} style={{ color: textColor }} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex w-9 h-9 items-center justify-center rounded-sm transition-colors hover:bg-black/5"
            >
              <ShoppingBag
                size={15}
                style={{ color: textColor }}
                strokeWidth={1.5}
              />
              {totalItems > 0 && (
                <span
                  className="absolute top-1 right-1 min-w-[14px] h-3.5 px-0.5 rounded-full flex items-center justify-center"
                  style={{
                    background: CORAL,
                    color: IVORY,
                    fontSize: 8,
                    fontFamily: "Inter,sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {totalItems}
                </span>
              )}
            </button>
            <div
              className="hidden lg:block w-px h-5 mx-2"
              style={{
                background: overHero
                  ? "rgba(244,242,239,0.22)"
                  : "rgba(12,35,64,0.1)",
              }}
            />
            <button
              onClick={() => {
                setMobile((v) => !v);
                setSearchOpen(false);
              }}
              className="lg:hidden flex w-9 h-9 items-center justify-center rounded-sm transition-colors hover:bg-black/5"
            >
              {mobile ? (
                <X size={17} style={{ color: textColor }} strokeWidth={1.5} />
              ) : (
                <Menu
                  size={17}
                  style={{ color: textColor }}
                  strokeWidth={1.5}
                />
              )}
            </button>
          </div>
        </div>

        {/* Search — animated slide-down */}
        <div
          style={{
            maxHeight: searchOpen ? 64 : 0,
            overflow: "hidden",
            transition: "max-height 0.28s ease",
            borderTop: searchOpen ? "1px solid rgba(12,35,64,0.08)" : "none",
            background: IVORY,
          }}
        >
          <div className="max-w-7xl mx-auto px-10 flex items-center gap-3 h-16">
            <Search size={14} style={{ color: SLATE, flexShrink: 0 }} />
            <input
              autoFocus={searchOpen}
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder="Search products, categories, or topics…"
              className="flex-1 outline-none bg-transparent"
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 14,
                color: CHARCOAL,
              }}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setSearchOpen(false);
                  setSearchVal("");
                }
              }}
            />
            {searchVal && (
              <button onClick={() => setSearchVal("")}>
                <X size={13} style={{ color: SLATE }} />
              </button>
            )}
          </div>
        </div>

        {/* Mega menu — animated slide-down */}
        <div
          style={{
            maxHeight: openMenu && MEGA[openMenu] ? 300 : 0,
            overflow: "hidden",
            transition: "max-height 0.28s cubic-bezier(0.4,0,0.2,1)",
            background: IVORY,
            borderTop: "1px solid rgba(12,35,64,0.07)",
            boxShadow: openMenu ? "0 16px 40px rgba(12,35,64,0.09)" : "none",
          }}
          onMouseEnter={() => {
            if (leaveTimer.current) clearTimeout(leaveTimer.current);
          }}
          onMouseLeave={leave}
        >
          {openMenu && MEGA[openMenu] && (
            <div
              className="px-10 py-7 flex"
              style={{
                width: `${MEGA[openMenu].cols.length * 196 + 80}px`,
                maxWidth: "100%",
              }}
            >
              {MEGA[openMenu].cols.map((col, ci) => (
                <div
                  key={col.title}
                  className="flex-shrink-0"
                  style={{
                    width: 196,
                    paddingRight: 32,
                    borderRight:
                      ci < MEGA[openMenu].cols.length - 1
                        ? "1px solid rgba(12,35,64,0.07)"
                        : "none",
                    marginRight: ci < MEGA[openMenu].cols.length - 1 ? 32 : 0,
                  }}
                >
                  <div
                    className="overflow-hidden mb-3"
                    style={{ background: SAND, width: 148, height: 88 }}
                  >
                    <img
                      src={col.img}
                      alt={col.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p
                    style={{
                      fontFamily: "Fraunces,serif",
                      fontWeight: 400,
                      fontSize: 13,
                      color: NAVY,
                      marginBottom: 8,
                    }}
                  >
                    {col.title}
                  </p>
                  <ul className="space-y-2">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <button
                          onClick={() => {
                            navigate("shop");
                            setOpenMenu(null);
                          }}
                          style={{
                            fontFamily: "Inter,sans-serif",
                            fontSize: 12,
                            color: SLATE,
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: 0,
                          }}
                          className="hover:text-coral transition-colors text-left"
                        >
                          {l.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Mobile full-screen drawer */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 39,
          background: NAVY,
          transform: mobile ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
          paddingTop: 96,
          overflowY: "auto",
        }}
      >
        <div className="px-8 pb-10">
          {NAV_ITEMS.map((label) => (
            <div
              key={label}
              style={{ borderBottom: "1px solid rgba(244,242,239,0.08)" }}
            >
              <button
                onClick={() => {
                  navigate(NAV_PAGES[label]);
                  setMobile(false);
                }}
                className="flex items-center justify-between w-full py-5"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    fontFamily: "Fraunces,serif",
                    fontWeight: 400,
                    fontSize: "clamp(1.3rem,5vw,1.9rem)",
                    color: page === NAV_PAGES[label] ? CORAL : IVORY,
                  }}
                >
                  {label}
                </span>
                <ArrowRight
                  size={15}
                  style={{ color: "rgba(244,242,239,0.3)" }}
                />
              </button>
            </div>
          ))}
          <div className="mt-10 space-y-2">
            <p
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 10,
                color: "rgba(244,242,239,0.3)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Contact
            </p>
            <p
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 13,
                color: "rgba(244,242,239,0.5)",
              }}
            >
              info@premiersalt.com.pk
            </p>
            <p
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 13,
                color: "rgba(244,242,239,0.5)",
              }}
            >
              +92 300 123 4567
            </p>
          </div>
        </div>
      </div>
      {mobile && (
        <div className="fixed inset-0 z-38" onClick={() => setMobile(false)} />
      )}
    </>
  );
}

// ─── 3. Hero ───────────────────────────────────────────────────────────────────
function Hero() {
  const { navigate } = useApp();
  const [item, setItem] = useState(0);
  const [ships, setShips] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const ITEMS = ["Edible Salt", "Lamps & Decor", "Spa & Bath", "Bulk Export"];
  const SHIPS = ["Pakistan", "Worldwide"];

  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100dvh", minHeight: 560, background: NAVY }}
    >
      {/* Parallax background */}
      <img
        src={IMG.hero}
        alt="Himalayan pink salt crystals catching warm golden light"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: 0.45,
          transform: `scale(1.08) translateY(${scrollY * 0.25}px)`,
          willChange: "transform",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(170deg, rgba(12,35,64,0.35) 0%, rgba(12,35,64,0.72) 100%)",
        }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-20 sm:pb-28 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: "Inter,sans-serif",
            fontWeight: 400,
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(244,242,239,0.6)",
            marginBottom: 20,
          }}
        >
          Mined at Khewra, Punjab · Est. 1980
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "Fraunces,serif",
            fontWeight: 600,
            fontSize: "clamp(2.2rem,7vw,6.5rem)",
            color: IVORY,
            lineHeight: 1.08,
            maxWidth: 860,
            letterSpacing: "-0.01em",
            marginBottom: 20,
          }}
        >
          <em style={{ fontStyle: "italic", fontWeight: 400 }}>Maybe</em> the
          purest salt{" "}
          <em style={{ fontStyle: "italic", fontWeight: 400 }}>
            isn't refined at all
          </em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          style={{
            fontFamily: "Inter,sans-serif",
            fontWeight: 300,
            fontSize: 14,
            color: "rgba(244,242,239,0.65)",
            marginBottom: 36,
          }}
        >
          Hand-mined from the Khewra Salt Range, delivered to your door.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center w-full max-w-2xl"
          style={{
            background: "rgba(244,242,239,0.1)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(244,242,239,0.2)",
          }}
        >
          <div
            className="flex items-center gap-2 px-5 py-3 flex-1 min-w-0 sm:border-r border-b sm:border-b-0"
            style={{ borderColor: "rgba(244,242,239,0.2)" }}
          >
            <span
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 10,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(244,242,239,0.5)",
                whiteSpace: "nowrap",
              }}
            >
              Looking for
            </span>
            <select
              value={item}
              onChange={(e) => setItem(Number(e.target.value))}
              className="bg-transparent outline-none flex-1 min-w-0 truncate"
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 13,
                color: IVORY,
                border: "none",
                cursor: "pointer",
              }}
            >
              {ITEMS.map((v, i) => (
                <option
                  key={i}
                  value={i}
                  style={{ color: CHARCOAL, background: IVORY }}
                >
                  {v}
                </option>
              ))}
            </select>
          </div>
          <div
            className="flex items-center gap-2 px-5 py-3 sm:border-r border-b sm:border-b-0"
            style={{ borderColor: "rgba(244,242,239,0.2)" }}
          >
            <span
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 10,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(244,242,239,0.5)",
                whiteSpace: "nowrap",
              }}
            >
              Ships to
            </span>
            <select
              value={ships}
              onChange={(e) => setShips(Number(e.target.value))}
              className="bg-transparent outline-none"
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 13,
                color: IVORY,
                border: "none",
                cursor: "pointer",
              }}
            >
              {SHIPS.map((v, i) => (
                <option
                  key={i}
                  value={i}
                  style={{ color: CHARCOAL, background: IVORY }}
                >
                  {v}
                </option>
              ))}
            </select>
          </div>
          <motion.button
            onClick={() => navigate("shop")}
            whileHover={{ opacity: 0.85 }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: CORAL,
              color: IVORY,
              padding: "12px 24px",
              fontFamily: "Inter,sans-serif",
              fontWeight: 500,
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              border: "none",
              cursor: "pointer",
            }}
            className="w-full sm:w-auto"
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span
          style={{
            fontFamily: "Inter,sans-serif",
            fontSize: 9,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: IVORY,
          }}
        >
          Explore more
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown size={13} style={{ color: IVORY }} />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── 4. Intro Cards ───────────────────────────────────────────────────────────
function IntroCards() {
  const { navigate } = useApp();
  return (
    <section className="py-24 px-8" style={{ background: IVORY }}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {[
          {
            img: IMG.story,
            title: "Our Story",
            body: "Premier Salt Industries has spent four decades perfecting the art of bringing Himalayan salt from Pakistan's ancient mountains to tables and homes across 90 countries.",
            link: "Discover more",
            page: "about" as Page,
          },
          {
            img: IMG.packaging,
            title: "Bulk & Private Label",
            body: "Whether you're building a wellness brand or supplying a supermarket chain, our private-label program handles branding, certification, and logistics from day one.",
            link: "Explore wholesale",
            page: "wholesale" as Page,
          },
        ].map((c, idx) => (
          <FadeUp key={c.title} delay={idx * 0.15}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <div
                className="aspect-[4/3] overflow-hidden mb-7 cursor-pointer"
                style={{ background: SAND }}
                onClick={() => navigate(c.page)}
              >
                <motion.img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <p
                style={{
                  fontFamily: "Fraunces,serif",
                  fontWeight: 400,
                  fontSize: 20,
                  color: NAVY,
                  marginBottom: 10,
                  lineHeight: 1.25,
                }}
              >
                {c.title}
              </p>
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: 13,
                  lineHeight: 1.75,
                  color: SLATE,
                  marginBottom: 14,
                }}
              >
                {c.body}
              </p>
              <TextLink onClick={() => navigate(c.page)}>{c.link}</TextLink>
            </motion.div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

// ─── 5. Quote Moment ──────────────────────────────────────────────────────────
function QuoteMoment() {
  return (
    <section className="py-20 px-8" style={{ background: IVORY }}>
      <Divider className="mb-16" />
      <FadeUp>
        <div className="max-w-4xl mx-auto text-center">
          <p
            style={{
              fontFamily: "Fraunces,serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1.2rem,3vw,2rem)",
              color: NAVY,
              lineHeight: 1.55,
              marginBottom: 16,
            }}
          >
            "Maybe the finest seasoning <em>comes from a mountain,</em> not a
            factory."
          </p>
        </div>
      </FadeUp>
      <Divider className="mt-16 mb-16" />
      <FadeIn>
        <div
          className="max-w-6xl mx-auto relative overflow-hidden group cursor-pointer"
          style={{ aspectRatio: "16/9", background: NAVY }}
        >
          <motion.img
            src={IMG.cave}
            alt="Salt being mined at Khewra"
            className="w-full h-full object-cover"
            style={{ opacity: 0.75 }}
            whileHover={{ scale: 1.03, opacity: 0.65 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.button
            className="absolute bottom-6 right-6 flex items-center gap-2.5 px-5 py-2.5"
            whileHover={{ opacity: 0.8, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
              border: "1px solid rgba(244,242,239,0.55)",
              color: IVORY,
              background: "rgba(12,35,64,0.4)",
              backdropFilter: "blur(6px)",
            }}
          >
            <svg width="12" height="14" viewBox="0 0 12 14" fill={IVORY}>
              <polygon points="0,0 12,7 0,14" />
            </svg>
            <span
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 10,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Watch the process
            </span>
          </motion.button>
        </div>
      </FadeIn>
    </section>
  );
}

// ─── 6. Collection Scroller ───────────────────────────────────────────────────
const COLLECTION = [
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

function CollectionScroller() {
  const { navigate } = useApp();
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const scroll = (d: number) =>
    ref.current?.scrollBy({ left: d * 260, behavior: "smooth" });
  const onScroll = useCallback(() => {
    if (!ref.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = ref.current;
    setProgress(scrollLeft / (scrollWidth - clientWidth));
  }, []);
  return (
    <section className="py-20 px-8" style={{ background: IVORY }}>
      <Divider className="mb-16" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between mb-10 gap-6">
          <FadeUp>
            <BrandMark />
            <Eyebrow>Our Collection</Eyebrow>
            <h2
              style={{
                fontFamily: "Fraunces,serif",
                fontWeight: 400,
                fontSize: "clamp(1.6rem,3.5vw,2.6rem)",
                color: NAVY,
                lineHeight: 1.2,
              }}
            >
              Salt, as nature{" "}
              <em style={{ fontStyle: "italic" }}>intended it</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 13,
                lineHeight: 1.7,
                color: SLATE,
                maxWidth: 300,
                paddingTop: 44,
              }}
            >
              Each category drawn from the same source — 250-million-year-old
              deposits — shaped for a different purpose.
            </p>
          </FadeUp>
        </div>
        <div
          ref={ref}
          onScroll={onScroll}
          className="flex gap-4 overflow-x-auto pb-1 select-none"
          style={{ scrollbarWidth: "none", cursor: "grab" }}
          onMouseDown={(e) => (e.currentTarget.style.cursor = "grabbing")}
          onMouseUp={(e) => (e.currentTarget.style.cursor = "grab")}
        >
          {COLLECTION.map((c, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-48 sm:w-56"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <div
                className="aspect-square overflow-hidden mb-4 cursor-pointer"
                style={{ background: SAND }}
                onClick={() => navigate("shop")}
              >
                <motion.img
                  src={c.img}
                  alt={c.label}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <p
                style={{
                  fontFamily: "Fraunces,serif",
                  fontWeight: 400,
                  fontSize: 15,
                  color: NAVY,
                  marginBottom: 4,
                }}
              >
                {c.label}
              </p>
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: 12,
                  color: SLATE,
                  marginBottom: 8,
                  lineHeight: 1.5,
                }}
              >
                {c.sub}
              </p>
              <TextLink onClick={() => navigate("shop")}>
                Shop {c.label.toLowerCase()}
              </TextLink>
            </motion.div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => scroll(-1)}
            className="w-8 h-8 flex items-center justify-center border transition-opacity hover:opacity-50"
            style={{ borderColor: "rgba(12,35,64,0.25)", color: NAVY }}
          >
            <ChevronLeft size={14} />
          </button>
          <div
            className="w-40 h-px relative"
            style={{ background: "rgba(12,35,64,0.12)" }}
          >
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300"
              style={{ width: `${progress * 100}%`, background: CORAL }}
            />
          </div>
          <button
            onClick={() => scroll(1)}
            className="w-8 h-8 flex items-center justify-center border transition-opacity hover:opacity-50"
            style={{ borderColor: "rgba(12,35,64,0.25)", color: NAVY }}
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── 7. Marquee ───────────────────────────────────────────────────────────────
const CERTS = [
  "ISO 9001 Certified",
  "FDA Registered",
  "Kosher Certified",
  "Halal Certified",
  "GFSI Compliant",
  "Gluten-Free",
  "Vegan Friendly",
  "ISO 22000",
];
function Marquee() {
  return (
    <>
      <Divider />
      <div className="overflow-hidden py-5" style={{ background: IVORY }}>
        <div
          className="flex"
          style={{
            animation: "marquee 30s linear infinite",
            width: "max-content",
          }}
        >
          {[...CERTS, ...CERTS].map((c, i) => (
            <div key={i} className="flex items-center gap-3 mx-10">
              <div className="w-1.5 h-1.5" style={{ background: CORAL }} />
              <span
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontWeight: 400,
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: SLATE,
                }}
              >
                {c}
              </span>
            </div>
          ))}
        </div>
        <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
      </div>
      <Divider />
    </>
  );
}

// ─── 8. Stats ─────────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800, started = false) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!started) return;
    const step = target / (duration / 16);
    let cur = 0;
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      setN(Math.floor(cur));
      if (cur >= target) clearInterval(t);
    }, 16);
    return () => clearInterval(t);
  }, [started, target, duration]);
  return n;
}

const STATS_DATA = [
  { v: 40, suf: "+", l: "Years of Heritage" },
  { v: 90, suf: "+", l: "Countries Served" },
  { v: 150, suf: "+", l: "M.Ton Daily Production" },
  { v: 400, suf: "+", l: "Global Partners" },
];

function StatCell({
  v,
  suf,
  l,
  started,
}: {
  v: number;
  suf: string;
  l: string;
  started: boolean;
}) {
  const count = useCountUp(v, 1800, started);
  return (
    <div className="stat-cell flex flex-col items-center justify-center text-center py-10 px-6">
      <div
        style={{
          fontFamily: "Fraunces,serif",
          fontWeight: 600,
          fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
          color: IVORY,
          lineHeight: 1,
        }}
      >
        {count}
        {suf}
      </div>
      <div
        className="mt-3"
        style={{
          fontFamily: "Inter,sans-serif",
          fontSize: 11,
          letterSpacing: "0.1em",
          color: "rgba(244,242,239,0.45)",
          textTransform: "uppercase",
        }}
      >
        {l}
      </div>
    </div>
  );
}

function StatsSection() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section ref={ref} className="py-20 px-8" style={{ background: NAVY }}>
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <div className="text-center mb-14">
            <Eyebrow light>Our Scale</Eyebrow>
            <h2
              style={{
                fontFamily: "Fraunces,serif",
                fontWeight: 400,
                fontSize: "clamp(1.6rem,4vw,2.8rem)",
                color: IVORY,
                lineHeight: 1.2,
              }}
            >
              A legacy measured in generations,{" "}
              <em style={{ fontStyle: "italic" }}>not just shipments</em>
            </h2>
            <svg
              className="mx-auto mt-6"
              width="100"
              height="10"
              viewBox="0 0 100 10"
              fill="none"
            >
              <path
                d="M2 8C18 2 35 10 50 5S80 2 98 7"
                stroke={CORAL}
                strokeWidth="1.2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </FadeUp>
        <style>{`
          .stat-cell { border-right: 1px solid rgba(244,242,239,0.15); border-bottom: 1px solid rgba(244,242,239,0.15); }
          .stat-cell:nth-child(2n) { border-right: none; }
          .stat-cell:nth-child(n+3) { border-bottom: none; }
          @media (min-width:1024px) {
            .stat-cell { border-right: 1px solid rgba(244,242,239,0.15); border-bottom: none; }
            .stat-cell:last-child { border-right: none; }
          }
        `}</style>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS_DATA.map((s, i) => (
            <StatCell key={i} {...s} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 9. Categories Grid ───────────────────────────────────────────────────────
const CATS = [
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
function CatCard({
  cat,
}: {
  cat: { label: string; sub: string; img: string; span: string };
}) {
  const { navigate } = useApp();
  return (
    <motion.div
      className={`relative overflow-hidden cursor-pointer ${cat.span}`}
      style={{ background: NAVY, minHeight: 220 }}
      whileHover="hov"
      onClick={() => navigate("shop")}
      whileTap={{ scale: 0.98 }}
    >
      <motion.img
        src={cat.img}
        alt={cat.label}
        className="absolute inset-0 w-full h-full object-cover"
        variants={{ hov: { scale: 1.06, opacity: 0.58 } }}
        initial={{ scale: 1, opacity: 0.78 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(12,35,64,0.75) 0%, rgba(12,35,64,0.15) 60%)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p
          style={{
            fontFamily: "Fraunces,serif",
            fontWeight: 400,
            fontSize: "clamp(1rem,2vw,1.4rem)",
            color: IVORY,
            lineHeight: 1.25,
            marginBottom: 4,
          }}
        >
          {cat.label}
        </p>
        <p
          style={{
            fontFamily: "Inter,sans-serif",
            fontSize: 11,
            color: "rgba(244,242,239,0.6)",
            marginBottom: 10,
          }}
        >
          {cat.sub}
        </p>
        <motion.span
          variants={{ hov: { color: CORAL, x: 4 } }}
          initial={{ color: "rgba(244,242,239,0.7)", x: 0 }}
          transition={{ duration: 0.25 }}
          style={{
            fontFamily: "Inter,sans-serif",
            fontSize: 10,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            display: "inline-block",
          }}
        >
          Shop now →
        </motion.span>
      </div>
    </motion.div>
  );
}

function ProductCard({ p }: { p: Product }) {
  const { navigate, setSelectedProduct, addToCart } = useApp();
  const [added, setAdded] = useState(false);
  return (
    <motion.div
      className="flex-shrink-0 w-48 sm:w-60 lg:w-64 cursor-pointer"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      <div
        className="relative aspect-square overflow-hidden mb-4"
        style={{ background: SAND }}
        onClick={() => {
          setSelectedProduct(p);
          navigate("product");
        }}
      >
        <motion.img
          src={p.img}
          alt={p.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(p, p.weight[0]);
            setAdded(true);
            setTimeout(() => setAdded(false), 1500);
          }}
          className="absolute bottom-3 right-3 w-8 h-8 flex items-center justify-center border"
          whileTap={{ scale: 0.9 }}
          style={{
            borderColor: added ? CORAL : "rgba(244,242,239,0.7)",
            background: added ? CORAL : "rgba(244,242,239,0.85)",
            color: added ? IVORY : NAVY,
            transition: "background 0.25s, border-color 0.25s",
          }}
        >
          {added ? <Check size={12} /> : <Plus size={12} />}
        </motion.button>
      </div>
      <div
        onClick={() => {
          setSelectedProduct(p);
          navigate("product");
        }}
      >
        <p
          style={{
            fontFamily: "Fraunces,serif",
            fontWeight: 400,
            fontSize: 15,
            color: CHARCOAL,
            lineHeight: 1.3,
            marginBottom: 5,
          }}
        >
          {p.name}
        </p>
        <div className="flex items-center gap-1 mb-3">
          <Stars rating={p.rating} />
          <span
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: 10,
              color: SLATE,
              marginLeft: 2,
            }}
          >
            ({p.reviews})
          </span>
        </div>
        <p
          style={{
            fontFamily: "Inter,sans-serif",
            fontWeight: 600,
            fontSize: 14,
            color: NAVY,
          }}
        >
          PKR {p.price.toLocaleString()}
        </p>
      </div>
    </motion.div>
  );
}

function CategoriesSection() {
  const { navigate } = useApp();
  return (
    <section className="py-20 px-8" style={{ background: IVORY }}>
      <Divider className="mb-16" />
      <div className="max-w-7xl mx-auto">
        <FadeUp className="mb-10">
          <BrandMark />
          <Eyebrow>Collections</Eyebrow>
          <h2
            style={{
              fontFamily: "Fraunces,serif",
              fontWeight: 400,
              fontSize: "clamp(1.6rem,3.5vw,2.6rem)",
              color: NAVY,
              lineHeight: 1.2,
            }}
          >
            Explore our product world
          </h2>
        </FadeUp>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-3"
          style={{ minHeight: 560 }}
        >
          {CATS.map((cat) => (
            <CatCard key={cat.label} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 10. Journey Accordion ────────────────────────────────────────────────────
const STEPS = [
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
function JourneySection() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-20 px-8" style={{ background: IVORY }}>
      <Divider className="mb-16" />
      <div className="max-w-7xl mx-auto">
        <FadeUp className="mb-12">
          <BrandMark />
          <Eyebrow>Our Process</Eyebrow>
          <h2
            style={{
              fontFamily: "Fraunces,serif",
              fontWeight: 400,
              fontSize: "clamp(1.6rem,3.5vw,2.6rem)",
              color: NAVY,
              lineHeight: 1.2,
            }}
          >
            The journey of salt
          </h2>
        </FadeUp>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            {STEPS.map((s, i) => (
              <motion.div
                key={i}
                className="border-b cursor-pointer"
                style={{ borderColor: "rgba(12,35,64,0.1)" }}
                onClick={() => setOpen(i)}
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
              >
                <div className="flex items-center justify-between py-5">
                  <div className="flex items-center gap-5">
                    <span
                      style={{
                        fontFamily: "Inter,sans-serif",
                        fontSize: 10,
                        letterSpacing: "0.1em",
                        color: open === i ? CORAL : SLATE,
                        transition: "color 0.25s",
                      }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      style={{
                        fontFamily: "Fraunces,serif",
                        fontWeight: 400,
                        fontSize: "clamp(1rem,1.8vw,1.2rem)",
                        color: open === i ? NAVY : CHARCOAL,
                        transition: "color 0.25s",
                      }}
                    >
                      {s.label}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.28 }}
                  >
                    <ChevronDown size={14} style={{ color: SLATE }} />
                  </motion.div>
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: open === i ? "auto" : 0,
                    opacity: open === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <p
                    className="pb-6 pr-4"
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontSize: 13,
                      lineHeight: 1.75,
                      color: SLATE,
                    }}
                  >
                    {s.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
          <div
            className="lg:sticky lg:top-28 relative overflow-hidden rounded-sm"
            style={{ aspectRatio: "4/3", background: NAVY }}
          >
            {STEPS.map((s, i) => (
              <motion.img
                key={i}
                src={s.img}
                alt={s.label}
                className="absolute inset-0 w-full h-full object-cover"
                animate={{
                  opacity: open === i ? 1 : 0,
                  scale: open === i ? 1 : 1.03,
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 11. Product Carousel ─────────────────────────────────────────────────────
function ProductCarousel() {
  const { navigate, setSelectedProduct, addToCart } = useApp();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const scroll = (d: number) =>
    scrollRef.current?.scrollBy({ left: d * 300, behavior: "smooth" });
  const onScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setProgress(scrollLeft / (scrollWidth - clientWidth));
  }, []);
  return (
    <section className="py-20 px-8" style={{ background: IVORY }}>
      <Divider className="mb-16" />
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <FadeUp>
            <BrandMark />
            <Eyebrow>Top Sellers</Eyebrow>
            <h2
              style={{
                fontFamily: "Fraunces,serif",
                fontWeight: 400,
                fontSize: "clamp(1.6rem,3.5vw,2.6rem)",
                color: NAVY,
                lineHeight: 1.2,
              }}
            >
              Bestsellers
            </h2>
          </FadeUp>
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex gap-3">
              {[ChevronLeft, ChevronRight].map((Icon, i) => (
                <button
                  key={i}
                  onClick={() => scroll(i === 0 ? -1 : 1)}
                  className="w-9 h-9 flex items-center justify-center border transition-opacity hover:opacity-50"
                  style={{ borderColor: "rgba(12,35,64,0.25)", color: NAVY }}
                >
                  <Icon size={14} />
                </button>
              ))}
            </div>
            <TextLink onClick={() => navigate("shop")}>
              View all products
            </TextLink>
          </div>
        </div>
        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-2 select-none"
          style={{ scrollbarWidth: "none", cursor: "grab" }}
          onMouseDown={(e) => (e.currentTarget.style.cursor = "grabbing")}
          onMouseUp={(e) => (e.currentTarget.style.cursor = "grab")}
        >
          {ALL_PRODUCTS.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
        <div
          className="mt-7 h-px w-full relative"
          style={{ background: "rgba(12,35,64,0.1)" }}
        >
          <div
            className="absolute top-0 left-0 h-full transition-all duration-300"
            style={{ width: `${progress * 100}%`, background: CORAL }}
          />
        </div>
      </div>
    </section>
  );
}

// ─── 12. Wholesale Callout ────────────────────────────────────────────────────
function WholesaleCallout() {
  const { navigate } = useApp();
  return (
    <section className="grid lg:grid-cols-2" style={{ minHeight: 480 }}>
      <div
        className="flex flex-col justify-center px-10 py-16 lg:px-16"
        style={{ background: NAVY }}
      >
        <FadeUp>
          <Eyebrow light>For Businesses</Eyebrow>
          <h2
            style={{
              fontFamily: "Fraunces,serif",
              fontWeight: 400,
              fontSize: "clamp(1.6rem,3.5vw,2.6rem)",
              color: IVORY,
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Private labeling &{" "}
            <em style={{ fontStyle: "italic" }}>bulk export,</em> done right
          </h2>
          <p
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: 13,
              lineHeight: 1.8,
              color: "rgba(244,242,239,0.6)",
              marginBottom: 28,
              maxWidth: 420,
            }}
          >
            From custom packaging to full private-label programs — our team
            handles certification, logistics, and compliance for retailers in
            90+ countries.
          </p>
        </FadeUp>
        <div
          className="mb-8 p-5"
          style={{ border: "1px solid rgba(255,98,104,0.4)" }}
        >
          <p
            style={{
              fontFamily: "Inter,sans-serif",
              fontWeight: 500,
              fontSize: 10,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: CORAL,
              marginBottom: 10,
            }}
          >
            What every order includes
          </p>
          {[
            "ISO 9001 & FDA certification docs",
            "Custom branding & label design",
            "Dedicated export coordinator",
            "Real-time shipment tracking",
          ].map((f) => (
            <div key={f} className="flex items-center gap-2.5 mb-2">
              <Check size={11} style={{ color: CORAL, flexShrink: 0 }} />
              <span
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: 12,
                  color: "rgba(244,242,239,0.65)",
                }}
              >
                {f}
              </span>
            </div>
          ))}
        </div>
        <OutlineBtn light onClick={() => navigate("wholesale")}>
          Explore Wholesale <ArrowRight size={12} />
        </OutlineBtn>
      </div>
      <div className="min-h-72 lg:min-h-0" style={{ background: NAVY }}>
        <img
          src={IMG.packaging}
          alt="Premier Salt export packaging"
          className="w-full h-full object-cover"
          style={{ opacity: 0.75 }}
        />
      </div>
    </section>
  );
}

// ─── 13. Testimonials ─────────────────────────────────────────────────────────
const TESTIMONIALS = [
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
function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % TESTIMONIALS.length),
      6500,
    );
    return () => clearInterval(t);
  }, []);
  const t = TESTIMONIALS[idx];
  return (
    <section className="py-24 px-8" style={{ background: IVORY }}>
      <Divider className="mb-20" />
      <FadeUp>
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>Partners say</Eyebrow>
          <motion.blockquote
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "Fraunces,serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1.1rem,2.5vw,1.4rem)",
              color: NAVY,
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            "{t.q}"
          </motion.blockquote>
          <motion.div
            key={`attr-${idx}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center justify-center gap-4"
          >
            <motion.div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{
                background: CORAL,
                color: IVORY,
                fontFamily: "Inter,sans-serif",
                fontSize: 12,
                fontWeight: 600,
              }}
              whileHover={{ scale: 1.1 }}
            >
              {t.initials}
            </motion.div>
            <div className="text-left">
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontWeight: 600,
                  fontSize: 13,
                  color: NAVY,
                }}
              >
                {t.name}
              </p>
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: 11,
                  color: SLATE,
                }}
              >
                {t.co}
              </p>
            </div>
          </motion.div>
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setIdx(i)}
                animate={{
                  width: i === idx ? 20 : 6,
                  background: i === idx ? CORAL : "rgba(12,35,64,0.2)",
                }}
                transition={{ duration: 0.3 }}
                className="h-1.5 rounded-full"
                style={{ border: "none", cursor: "pointer" }}
              />
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

// ─── 14. Journal Teaser ───────────────────────────────────────────────────────
const POSTS = [
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
function JournalTeaser() {
  const { navigate } = useApp();
  return (
    <section className="py-20 px-8" style={{ background: IVORY }}>
      <Divider className="mb-16" />
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <FadeUp>
            <BrandMark />
            <Eyebrow>Stories</Eyebrow>
            <h2
              style={{
                fontFamily: "Fraunces,serif",
                fontWeight: 400,
                fontSize: "clamp(1.6rem,3.5vw,2.6rem)",
                color: NAVY,
                lineHeight: 1.2,
              }}
            >
              From the journal
            </h2>
          </FadeUp>
          <TextLink onClick={() => navigate("journal")}>All articles</TextLink>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {POSTS.map((p, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <motion.article
                className="group cursor-pointer"
                onClick={() => navigate("journal")}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                <div
                  className="overflow-hidden mb-5"
                  style={{ background: SAND, aspectRatio: "4/3" }}
                >
                  <motion.img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <p
                  style={{
                    fontFamily: "Inter,sans-serif",
                    fontWeight: 500,
                    fontSize: 9,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: CORAL,
                    marginBottom: 8,
                  }}
                >
                  {p.cat} · {p.date}
                </p>
                <h3
                  style={{
                    fontFamily: "Fraunces,serif",
                    fontWeight: 400,
                    fontSize: "clamp(1rem,1.8vw,1.15rem)",
                    color: NAVY,
                    lineHeight: 1.35,
                    marginBottom: 8,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Inter,sans-serif",
                    fontSize: 13,
                    lineHeight: 1.7,
                    color: SLATE,
                  }}
                >
                  {p.excerpt}
                </p>
              </motion.article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 15. Newsletter ───────────────────────────────────────────────────────────
function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section className="py-20 px-8" style={{ background: IVORY }}>
      <Divider className="mb-16" />
      <FadeUp>
        <div className="max-w-lg mx-auto text-center">
          <BrandMark />
          <Eyebrow>Stay Connected</Eyebrow>
          <h2
            style={{
              fontFamily: "Fraunces,serif",
              fontWeight: 400,
              fontSize: "clamp(1.6rem,3.5vw,2.4rem)",
              color: NAVY,
              lineHeight: 1.2,
              marginBottom: 8,
            }}
          >
            Stay Connected
          </h2>
          <p
            style={{
              fontFamily: "Fraunces,serif",
              fontStyle: "italic",
              fontSize: 16,
              color: SLATE,
              marginBottom: 28,
            }}
          >
            Recipes, salt lore, and trade updates — delivered gently.
          </p>
          {done ? (
            <p
              style={{
                fontFamily: "Fraunces,serif",
                fontStyle: "italic",
                fontSize: 18,
                color: NAVY,
              }}
            >
              Thank you — you're on the list.
            </p>
          ) : (
            <form
              className="flex"
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-3 outline-none"
                style={{
                  background: "transparent",
                  border: `1px solid rgba(12,35,64,0.2)`,
                  borderRight: "none",
                  fontFamily: "Inter,sans-serif",
                  fontSize: 13,
                  color: CHARCOAL,
                }}
              />
              <button
                type="submit"
                style={{
                  background: CORAL,
                  color: IVORY,
                  padding: "0 22px",
                  fontFamily: "Inter,sans-serif",
                  fontWeight: 500,
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  border: "none",
                  cursor: "pointer",
                }}
                className="hover:opacity-85 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          )}
          <p
            className="mt-4"
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: 11,
              color: SLATE,
            }}
          >
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </FadeUp>
    </section>
  );
}

// ─── 16. Footer ───────────────────────────────────────────────────────────────
function Footer() {
  const { navigate } = useApp();
  const cols = [
    {
      h: "Shop",
      links: [
        ["Edible & Gourmet Salt", "shop"],
        ["Salt Lamps & Decor", "shop"],
        ["Bath & Spa", "shop"],
        ["Grill Plates & Slabs", "shop"],
        ["Gift Sets", "shop"],
      ],
    },
    {
      h: "Wholesale",
      links: [
        ["Private Labeling", "wholesale"],
        ["Bulk Orders", "wholesale"],
        ["Certifications", "wholesale"],
        ["Global Presence", "wholesale"],
        ["Request a Quote", "wholesale"],
      ],
    },
    {
      h: "Company",
      links: [
        ["Our Story", "about"],
        ["The Khewra Range", "about"],
        ["Sustainability", "about"],
        ["Journal", "journal"],
        ["Contact Us", "contact"],
      ],
    },
  ] as { h: string; links: [string, Page][] }[];
  return (
    <footer style={{ background: NAVY }}>
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          <div className="lg:col-span-2">
            <button onClick={() => navigate("home")} className="text-left mb-4">
              <p
                style={{
                  fontFamily: "Fraunces,serif",
                  fontWeight: 600,
                  fontSize: 20,
                  color: IVORY,
                }}
              >
                PREMIER
              </p>
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: 9,
                  letterSpacing: "0.32em",
                  color: CORAL,
                  textTransform: "uppercase",
                }}
              >
                SALT INDUSTRIES
              </p>
            </button>
            <p
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 13,
                lineHeight: 1.75,
                color: "rgba(244,242,239,0.45)",
                maxWidth: 280,
                marginBottom: 18,
              }}
            >
              Premier Salt Industries Pvt Ltd — Pakistan's foremost Himalayan
              pink salt manufacturer and exporter since 1980.
            </p>
            {[
              "📍 Industrial Estate, Khushab Road, Pind Dadan Khan, Punjab",
              "📞 +92 300 123 4567",
              "✉️ info@premiersalt.com.pk",
            ].map((c) => (
              <p
                key={c}
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: 12,
                  color: "rgba(244,242,239,0.4)",
                  marginBottom: 6,
                }}
              >
                {c}
              </p>
            ))}
            <div className="flex gap-4 mt-5">
              {/* {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
                <button key={i} className="transition-opacity hover:opacity-50">
                  <Icon
                    size={15}
                    style={{ color: "rgba(244,242,239,0.4)" }}
                    strokeWidth={1.5}
                  />
                </button>
              ))} */}
            </div>
          </div>
          {cols.map((col) => (
            <div key={col.h}>
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontWeight: 500,
                  fontSize: 9,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: CORAL,
                  marginBottom: 16,
                }}
              >
                {col.h}
              </p>
              <ul className="space-y-2.5">
                {col.links.map(([label, page]) => (
                  <li key={label}>
                    <button
                      onClick={() => navigate(page)}
                      style={{
                        fontFamily: "Inter,sans-serif",
                        fontSize: 13,
                        color: "rgba(244,242,239,0.4)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                      }}
                      className="hover:text-white transition-colors"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="border-t flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderColor: "rgba(244,242,239,0.1)" }}
        >
          <p
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: 11,
              color: "rgba(244,242,239,0.3)",
            }}
          >
            © 2026 Premier Salt Industries Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Shipping Policy"].map(
              (l) => (
                <button
                  key={l}
                  style={{
                    fontFamily: "Inter,sans-serif",
                    fontSize: 11,
                    color: "rgba(244,242,239,0.3)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                  className="hover:text-white transition-colors"
                >
                  {l}
                </button>
              ),
            )}
          </div>
          <div className="flex gap-2">
            {["VISA", "MC", "COD", "JCB"].map((m) => (
              <span
                key={m}
                className="px-2 py-1"
                style={{
                  border: "1px solid rgba(244,242,239,0.12)",
                  fontFamily: "Inter,sans-serif",
                  fontSize: 9,
                  letterSpacing: "0.06em",
                  color: "rgba(244,242,239,0.35)",
                }}
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Cart Drawer ───────────────────────────────────────────────────────────────
function CartDrawer() {
  const { cart, cartOpen, setCartOpen, updateQty, removeFromCart, navigate } =
    useApp();
  const total = cart.reduce((s, i) => s + i.product.price * i.qty, 0);
  return (
    <>
      {cartOpen && (
        <div
          className="fixed inset-0 z-50"
          style={{
            background: "rgba(12,35,64,0.3)",
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setCartOpen(false)}
        />
      )}
      <div
        className="fixed top-0 right-0 h-full z-50 flex flex-col"
        style={{
          width: "min(440px,100vw)",
          background: IVORY,
          transform: cartOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div
          className="flex items-center justify-between px-8 py-5 border-b"
          style={{ borderColor: "rgba(12,35,64,0.1)" }}
        >
          <p
            style={{
              fontFamily: "Fraunces,serif",
              fontWeight: 400,
              fontSize: 20,
              color: NAVY,
            }}
          >
            Your Cart ({cart.reduce((s, i) => s + i.qty, 0)})
          </p>
          <button onClick={() => setCartOpen(false)}>
            <X size={18} style={{ color: SLATE }} />
          </button>
        </div>
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-8 text-center">
            <ShoppingBag
              size={40}
              style={{ color: "rgba(12,35,64,0.2)" }}
              strokeWidth={1}
            />
            <p
              style={{
                fontFamily: "Fraunces,serif",
                fontStyle: "italic",
                fontSize: 17,
                color: SLATE,
              }}
            >
              Your cart is empty
            </p>
            <TextLink
              onClick={() => {
                setCartOpen(false);
                navigate("shop");
              }}
            >
              Browse products
            </TextLink>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-8 py-8 space-y-7">
              {cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.weight}`}
                  className="flex gap-5"
                >
                  <div
                    className="w-20 h-20 flex-shrink-0 overflow-hidden"
                    style={{ background: SAND }}
                  >
                    <img
                      src={item.product.img}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      style={{
                        fontFamily: "Fraunces,serif",
                        fontWeight: 400,
                        fontSize: 14,
                        color: CHARCOAL,
                        marginBottom: 2,
                        lineHeight: 1.3,
                      }}
                    >
                      {item.product.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "Inter,sans-serif",
                        fontSize: 11,
                        color: SLATE,
                        marginBottom: 4,
                      }}
                    >
                      {item.weight}
                    </p>
                    <p
                      style={{
                        fontFamily: "Inter,sans-serif",
                        fontWeight: 600,
                        fontSize: 13,
                        color: NAVY,
                      }}
                    >
                      PKR {(item.product.price * item.qty).toLocaleString()}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <div
                        className="flex items-center border"
                        style={{ borderColor: "rgba(12,35,64,0.18)" }}
                      >
                        <button
                          className="w-7 h-7 flex items-center justify-center"
                          style={{ color: NAVY }}
                          onClick={() =>
                            item.qty === 1
                              ? removeFromCart(item.product.id)
                              : updateQty(item.product.id, item.qty - 1)
                          }
                        >
                          <Minus size={10} />
                        </button>
                        <span
                          className="w-8 text-center"
                          style={{
                            fontFamily: "Inter,sans-serif",
                            fontSize: 12,
                            color: CHARCOAL,
                          }}
                        >
                          {item.qty}
                        </span>
                        <button
                          className="w-7 h-7 flex items-center justify-center"
                          style={{ color: NAVY }}
                          onClick={() =>
                            updateQty(item.product.id, item.qty + 1)
                          }
                        >
                          <Plus size={10} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        style={{
                          fontFamily: "Inter,sans-serif",
                          fontSize: 11,
                          color: SLATE,
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          textDecoration: "underline",
                          textUnderlineOffset: 2,
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="px-8 py-7 border-t"
              style={{ borderColor: "rgba(12,35,64,0.1)" }}
            >
              <div className="flex justify-between mb-2">
                <span
                  style={{
                    fontFamily: "Inter,sans-serif",
                    fontSize: 12,
                    color: SLATE,
                  }}
                >
                  Subtotal
                </span>
                <span
                  style={{
                    fontFamily: "Inter,sans-serif",
                    fontWeight: 600,
                    fontSize: 15,
                    color: NAVY,
                  }}
                >
                  PKR {total.toLocaleString()}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: 11,
                  color: SLATE,
                  marginBottom: 20,
                }}
              >
                Shipping calculated at checkout
              </p>
              <PrimaryBtn
                fullWidth
                onClick={() => {
                  setCartOpen(false);
                  navigate("checkout");
                }}
              >
                Proceed to Checkout <ArrowRight size={12} />
              </PrimaryBtn>
            </div>
          </>
        )}
      </div>
    </>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PAGE: PRODUCT DETAIL
// ══════════════════════════════════════════════════════════════════════════════
function ProductDetailPage() {
  const { selectedProduct, addToCart, navigate, setCartOpen } = useApp();
  const p = selectedProduct ?? ALL_PRODUCTS[0];
  const [mainImg, setMainImg] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState(p.weight[0]);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<"description" | "shipping" | "reviews">(
    "description",
  );
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    setMainImg(0);
    setSelectedWeight(p.weight[0]);
    setQty(1);
  }, [p.id]);

  return (
    <div style={{ background: IVORY, minHeight: "100svh", paddingTop: 0 }}>
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-10">
          <button
            onClick={() => navigate("home")}
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: 11,
              color: SLATE,
              background: "none",
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.03em",
            }}
          >
            Home
          </button>
          <span style={{ color: SLATE, fontSize: 11 }}>/</span>
          <button
            onClick={() => navigate("shop")}
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: 11,
              color: SLATE,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            Shop
          </button>
          <span style={{ color: SLATE, fontSize: 11 }}>/</span>
          <span
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: 11,
              color: NAVY,
            }}
          >
            {p.name}
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: image gallery */}
          <div>
            <div
              className="relative aspect-square overflow-hidden mb-3 cursor-zoom-in"
              style={{ background: SAND }}
              onClick={() => setZoomed((v) => !v)}
            >
              <img
                src={p.imgs[mainImg]}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-500"
                style={{ transform: zoomed ? "scale(1.5)" : "scale(1)" }}
              />
              <button
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center"
                style={{ background: "rgba(244,242,239,0.8)" }}
              >
                <ZoomIn size={14} style={{ color: NAVY }} />
              </button>
            </div>
            <div className="flex gap-2">
              {p.imgs.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setMainImg(i)}
                  className="flex-1 aspect-square overflow-hidden"
                  style={{
                    border: `1px solid ${mainImg === i ? CORAL : "transparent"}`,
                    background: SAND,
                  }}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: product info */}
          <div>
            <Eyebrow>{p.category}</Eyebrow>
            <h1
              style={{
                fontFamily: "Fraunces,serif",
                fontWeight: 400,
                fontSize: "clamp(1.6rem,3vw,2.4rem)",
                color: NAVY,
                lineHeight: 1.2,
                marginBottom: 12,
              }}
            >
              {p.name}
            </h1>
            <div className="flex items-center gap-3 mb-5">
              <Stars rating={p.rating} />
              <span
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: 12,
                  color: SLATE,
                }}
              >
                {p.rating} · {p.reviews} reviews
              </span>
            </div>
            <p
              style={{
                fontFamily: "Fraunces,serif",
                fontWeight: 600,
                fontSize: "clamp(1.5rem,2.5vw,2rem)",
                color: NAVY,
                marginBottom: 6,
              }}
            >
              PKR {p.price.toLocaleString()}
            </p>
            <p
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 12,
                color: SLATE,
                marginBottom: 20,
              }}
            >
              Tax included. Free shipping on orders over PKR 5,000.
            </p>
            <p
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 14,
                lineHeight: 1.75,
                color: CHARCOAL,
                marginBottom: 24,
              }}
            >
              {p.short}
            </p>

            {/* Weight picker */}
            <div className="mb-6">
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontWeight: 500,
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: NAVY,
                  marginBottom: 10,
                }}
              >
                Size / Weight
              </p>
              <div className="flex flex-wrap gap-2">
                {p.weight.map((w) => (
                  <button
                    key={w}
                    onClick={() => setSelectedWeight(w)}
                    className="px-4 py-2 text-sm transition-all"
                    style={{
                      border: `1px solid ${selectedWeight === w ? CORAL : "rgba(12,35,64,0.2)"}`,
                      background: selectedWeight === w ? CORAL : "transparent",
                      color: selectedWeight === w ? IVORY : NAVY,
                      fontFamily: "Inter,sans-serif",
                      fontSize: 12,
                      cursor: "pointer",
                    }}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>

            {/* Qty + CTAs */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="flex items-center border"
                style={{ borderColor: "rgba(12,35,64,0.2)" }}
              >
                <button
                  className="w-10 h-11 flex items-center justify-center"
                  style={{ color: NAVY }}
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                >
                  <Minus size={12} />
                </button>
                <span
                  className="w-12 text-center"
                  style={{
                    fontFamily: "Inter,sans-serif",
                    fontSize: 14,
                    color: CHARCOAL,
                  }}
                >
                  {qty}
                </span>
                <button
                  className="w-10 h-11 flex items-center justify-center"
                  style={{ color: NAVY }}
                  onClick={() => setQty((q) => q + 1)}
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-3 mb-8">
              <PrimaryBtn
                fullWidth
                onClick={() => {
                  for (let i = 0; i < qty; i++) addToCart(p, selectedWeight);
                  setCartOpen(true);
                }}
              >
                Add to Cart — PKR {(p.price * qty).toLocaleString()}
              </PrimaryBtn>
              <NavyBtn
                fullWidth
                onClick={() => {
                  for (let i = 0; i < qty; i++) addToCart(p, selectedWeight);
                  navigate("checkout");
                }}
              >
                Buy Now
              </NavyBtn>
            </div>

            {/* Trust badges */}
            <div
              className="grid grid-cols-3 gap-3 mb-8 p-4"
              style={{ border: "1px solid rgba(12,35,64,0.12)" }}
            >
              {[
                {
                  icon: Package,
                  label: "Cash on Delivery",
                  sub: "Available nationwide",
                },
                {
                  icon: Shield,
                  label: "Certified Pure",
                  sub: "ISO 9001 · FDA",
                },
                {
                  icon: Truck,
                  label: "Ships Nationwide",
                  sub: "2–5 business days",
                },
              ].map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center gap-1.5 py-2"
                >
                  <Icon size={18} style={{ color: CORAL }} strokeWidth={1.5} />
                  <p
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontWeight: 500,
                      fontSize: 11,
                      color: NAVY,
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontSize: 10,
                      color: SLATE,
                    }}
                  >
                    {sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div
          className="mt-16 border-t"
          style={{ borderColor: "rgba(12,35,64,0.1)" }}
        >
          <div
            className="flex gap-8 border-b"
            style={{ borderColor: "rgba(12,35,64,0.1)" }}
          >
            {(["description", "shipping", "reviews"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="py-4 transition-colors"
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontWeight: 500,
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: tab === t ? NAVY : SLATE,
                  borderBottom:
                    tab === t ? `2px solid ${CORAL}` : "2px solid transparent",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                {t === "description"
                  ? "Description"
                  : t === "shipping"
                    ? "Shipping & Returns"
                    : "Reviews"}
              </button>
            ))}
          </div>
          <div className="py-10 max-w-2xl">
            {tab === "description" && (
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: 14,
                  lineHeight: 1.85,
                  color: CHARCOAL,
                }}
              >
                {p.description}
              </p>
            )}
            {tab === "shipping" && (
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: 14,
                  lineHeight: 1.85,
                  color: CHARCOAL,
                }}
              >
                {p.shipping}
              </p>
            )}
            {tab === "reviews" && (
              <div className="space-y-8">
                {[
                  {
                    name: "Ayesha K.",
                    rating: 5,
                    date: "Jun 2025",
                    text: "Absolutely love the quality. The salt has a beautiful pink colour and a clean mineral taste — nothing like generic table salt.",
                  },
                  {
                    name: "Michael R.",
                    rating: 5,
                    date: "Apr 2025",
                    text: "Ordered the bath salt as a gift and it arrived beautifully packed. My wife uses it every week now. Will reorder.",
                  },
                  {
                    name: "Sana M.",
                    rating: 4,
                    date: "Mar 2025",
                    text: "Great product, fast delivery via Cash on Delivery. Packaging could be slightly sturdier but the product itself is excellent.",
                  },
                ].map((r, i) => (
                  <div
                    key={i}
                    className="pb-8 border-b last:border-0"
                    style={{ borderColor: "rgba(12,35,64,0.08)" }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
                          style={{
                            background: SAND,
                            color: NAVY,
                            fontFamily: "Inter,sans-serif",
                          }}
                        >
                          {r.name[0]}
                        </div>
                        <span
                          style={{
                            fontFamily: "Inter,sans-serif",
                            fontWeight: 500,
                            fontSize: 13,
                            color: NAVY,
                          }}
                        >
                          {r.name}
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: "Inter,sans-serif",
                          fontSize: 11,
                          color: SLATE,
                        }}
                      >
                        {r.date}
                      </span>
                    </div>
                    <Stars rating={r.rating} />
                    <p
                      className="mt-3"
                      style={{
                        fontFamily: "Inter,sans-serif",
                        fontSize: 13,
                        lineHeight: 1.7,
                        color: CHARCOAL,
                      }}
                    >
                      {r.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PAGE: SHOP LISTING
// ══════════════════════════════════════════════════════════════════════════════
function ShopProductCard({ p }: { p: Product }) {
  const { navigate, setSelectedProduct, addToCart } = useApp();
  const [added, setAdded] = useState(false);
  return (
    <motion.div
      className="cursor-pointer"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      <div
        className="relative aspect-square overflow-hidden mb-4"
        style={{ background: SAND }}
        onClick={() => {
          setSelectedProduct(p);
          navigate("product");
        }}
      >
        <motion.img
          src={p.img}
          alt={p.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(p, p.weight[0]);
            setAdded(true);
            setTimeout(() => setAdded(false), 1500);
          }}
          className="absolute bottom-3 right-3 w-8 h-8 flex items-center justify-center border"
          whileTap={{ scale: 0.88 }}
          style={{
            borderColor: added ? CORAL : "rgba(244,242,239,0.7)",
            background: added ? CORAL : "rgba(244,242,239,0.85)",
            color: added ? IVORY : NAVY,
            transition: "background 0.25s, border-color 0.25s",
          }}
        >
          {added ? <Check size={12} /> : <Plus size={12} />}
        </motion.button>
      </div>
      <div
        onClick={() => {
          setSelectedProduct(p);
          navigate("product");
        }}
      >
        <p
          style={{
            fontFamily: "Fraunces,serif",
            fontWeight: 400,
            fontSize: 15,
            color: CHARCOAL,
            lineHeight: 1.3,
            marginBottom: 4,
          }}
        >
          {p.name}
        </p>
        <div className="flex items-center gap-1 mb-2">
          <Stars rating={p.rating} />
          <span
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: 10,
              color: SLATE,
              marginLeft: 2,
            }}
          >
            ({p.reviews})
          </span>
        </div>
        <p
          style={{
            fontFamily: "Inter,sans-serif",
            fontWeight: 600,
            fontSize: 14,
            color: NAVY,
          }}
        >
          PKR {p.price.toLocaleString()}
        </p>
      </div>
    </motion.div>
  );
}

function ShopPage() {
  const { navigate, setSelectedProduct, addToCart } = useApp();
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilter, setShowFilter] = useState(false);
  const cats = ["All", "Edible", "Lamps", "Spa", "Grill"];
  const filtered = ALL_PRODUCTS.filter(
    (p) => activeCategory === "All" || p.category === activeCategory,
  );
  const sorted = [...filtered].sort((a, b) =>
    sortBy === "price-asc"
      ? a.price - b.price
      : sortBy === "price-desc"
        ? b.price - a.price
        : sortBy === "rating"
          ? b.rating - a.rating
          : 0,
  );

  return (
    <div style={{ background: IVORY, minHeight: "100svh", paddingTop: 0 }}>
      {/* Page header */}
      <FadeUp>
        <div
          className="border-b py-14 px-8 text-center"
          style={{ borderColor: "rgba(12,35,64,0.1)" }}
        >
          <Eyebrow>All Products</Eyebrow>
          <h1
            style={{
              fontFamily: "Fraunces,serif",
              fontWeight: 400,
              fontSize: "clamp(2rem,5vw,3.5rem)",
              color: NAVY,
              lineHeight: 1.15,
            }}
          >
            The full <em style={{ fontStyle: "italic" }}>collection</em>
          </h1>
        </div>
      </FadeUp>

      <div className="max-w-7xl mx-auto px-8 py-10">
        {/* Filters bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className="px-5 py-2 transition-all"
                style={{
                  border: `1px solid ${activeCategory === c ? NAVY : "rgba(12,35,64,0.2)"}`,
                  background: activeCategory === c ? NAVY : "transparent",
                  color: activeCategory === c ? IVORY : NAVY,
                  fontFamily: "Inter,sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  cursor: "pointer",
                }}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 12,
                color: SLATE,
              }}
            >
              {sorted.length} products
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="outline-none px-3 py-2"
              style={{
                border: "1px solid rgba(12,35,64,0.2)",
                fontFamily: "Inter,sans-serif",
                fontSize: 12,
                color: NAVY,
                background: IVORY,
                cursor: "pointer",
              }}
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-10">
          {sorted.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ShopProductCard p={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PAGE: CHECKOUT
// ══════════════════════════════════════════════════════════════════════════════
const PROVINCES = [
  "Punjab",
  "Sindh",
  "Khyber Pakhtunkhwa",
  "Balochistan",
  "Islamabad Capital Territory",
  "Azad Jammu & Kashmir",
  "Gilgit-Baltistan",
];

function CheckoutPage() {
  const { cart, navigate } = useApp();
  const [payment, setPayment] = useState<"cod" | "online">("cod");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    province: PROVINCES[0],
  });
  const subtotal = cart.reduce((s, i) => s + i.product.price * i.qty, 0);
  const shipping = subtotal >= 5000 ? 0 : 250;
  const total = subtotal + shipping;
  const set =
    (k: string) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    border: "1px solid rgba(12,35,64,0.2)",
    background: "transparent",
    fontFamily: "Inter,sans-serif",
    fontSize: 13,
    color: CHARCOAL,
    outline: "none",
  };

  return (
    <div style={{ background: IVORY, minHeight: "100svh", paddingTop: 0 }}>
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="flex items-center gap-3 mb-10">
          <button
            onClick={() => navigate("home")}
            style={{
              ...inputStyle,
              width: "auto",
              padding: 0,
              border: "none",
              background: "none",
              color: SLATE,
              cursor: "pointer",
              fontSize: 11,
            }}
          >
            Home
          </button>
          <span style={{ color: SLATE, fontSize: 11 }}>/</span>
          <span
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: 11,
              color: NAVY,
            }}
          >
            Checkout
          </span>
        </div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-12">
          {/* Left: form */}
          <div>
            <h1
              style={{
                fontFamily: "Fraunces,serif",
                fontWeight: 400,
                fontSize: "clamp(1.6rem,3vw,2.2rem)",
                color: NAVY,
                marginBottom: 32,
              }}
            >
              Shipping Details
            </h1>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                navigate("confirmation");
              }}
              className="space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: NAVY,
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    Full Name *
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={set("name")}
                    placeholder="e.g. Ahmed Khan"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: NAVY,
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    Phone Number *
                  </label>
                  <input
                    required
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="+92 300 000 0000"
                    style={inputStyle}
                  />
                </div>
              </div>
              <div>
                <label
                  style={{
                    fontFamily: "Inter,sans-serif",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: NAVY,
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  Street Address *
                </label>
                <textarea
                  required
                  value={form.address}
                  onChange={set("address")}
                  placeholder="House no, street, area"
                  rows={2}
                  style={{ ...inputStyle, resize: "none" }}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: NAVY,
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    City *
                  </label>
                  <input
                    required
                    value={form.city}
                    onChange={set("city")}
                    placeholder="e.g. Lahore"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: NAVY,
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    Province *
                  </label>
                  <select
                    value={form.province}
                    onChange={set("province")}
                    style={{ ...inputStyle, cursor: "pointer" }}
                  >
                    {PROVINCES.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Payment method */}
              <div className="mt-8">
                <p
                  style={{
                    fontFamily: "Inter,sans-serif",
                    fontWeight: 500,
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: NAVY,
                    marginBottom: 14,
                  }}
                >
                  Payment Method
                </p>
                <div className="space-y-3">
                  {/* COD */}
                  <div
                    onClick={() => setPayment("cod")}
                    className="cursor-pointer p-5 transition-all"
                    style={{
                      border: `1px solid ${payment === "cod" ? CORAL : "rgba(12,35,64,0.2)"}`,
                      background: payment === "cod" ? "#FFF5F5" : "transparent",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded-full border-2 flex items-center justify-center"
                          style={{
                            borderColor:
                              payment === "cod" ? CORAL : "rgba(12,35,64,0.3)",
                          }}
                        >
                          {payment === "cod" && (
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{ background: CORAL }}
                            />
                          )}
                        </div>
                        <Package
                          size={18}
                          style={{ color: payment === "cod" ? CORAL : SLATE }}
                          strokeWidth={1.5}
                        />
                        <div>
                          <p
                            style={{
                              fontFamily: "Inter,sans-serif",
                              fontWeight: 600,
                              fontSize: 13,
                              color: NAVY,
                            }}
                          >
                            Cash on Delivery
                          </p>
                          <p
                            style={{
                              fontFamily: "Inter,sans-serif",
                              fontSize: 11,
                              color: SLATE,
                            }}
                          >
                            Pay when your order arrives
                          </p>
                        </div>
                      </div>
                      {payment === "cod" && (
                        <span
                          className="px-2 py-1 text-xs"
                          style={{
                            background: CORAL,
                            color: IVORY,
                            fontFamily: "Inter,sans-serif",
                            fontSize: 9,
                            letterSpacing: "0.12em",
                          }}
                        >
                          RECOMMENDED
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Online */}
                  <div
                    onClick={() => setPayment("online")}
                    className="cursor-pointer p-5 transition-all"
                    style={{
                      border: `1px solid ${payment === "online" ? NAVY : "rgba(12,35,64,0.2)"}`,
                      background: "transparent",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded-full border-2 flex items-center justify-center"
                        style={{
                          borderColor:
                            payment === "online" ? NAVY : "rgba(12,35,64,0.3)",
                        }}
                      >
                        {payment === "online" && (
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ background: NAVY }}
                          />
                        )}
                      </div>
                      <Clock
                        size={18}
                        style={{ color: payment === "online" ? NAVY : SLATE }}
                        strokeWidth={1.5}
                      />
                      <div>
                        <p
                          style={{
                            fontFamily: "Inter,sans-serif",
                            fontWeight: 600,
                            fontSize: 13,
                            color: NAVY,
                          }}
                        >
                          Pay Online
                        </p>
                        <p
                          style={{
                            fontFamily: "Inter,sans-serif",
                            fontSize: 11,
                            color: SLATE,
                          }}
                        >
                          Credit / Debit card · JazzCash · Easypaisa
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <PrimaryBtn type="submit" fullWidth>
                  Place Order <ArrowRight size={13} />
                </PrimaryBtn>
                <p
                  className="text-center mt-4"
                  style={{
                    fontFamily: "Inter,sans-serif",
                    fontSize: 11,
                    color: SLATE,
                  }}
                >
                  By placing your order you agree to our Terms of Service and
                  Privacy Policy.
                </p>
              </div>
            </form>
          </div>

          {/* Right: order summary (sticky) */}
          <div>
            <div
              className="lg:sticky lg:top-28 p-7"
              style={{
                border: "1px solid rgba(12,35,64,0.12)",
                background: IVORY,
              }}
            >
              <p
                style={{
                  fontFamily: "Fraunces,serif",
                  fontWeight: 400,
                  fontSize: 18,
                  color: NAVY,
                  marginBottom: 20,
                }}
              >
                Order Summary
              </p>
              <div className="space-y-5 mb-6">
                {cart.map((item) => (
                  <div
                    key={`${item.product.id}-${item.weight}`}
                    className="flex gap-4"
                  >
                    <div
                      className="w-16 h-16 flex-shrink-0 overflow-hidden relative"
                      style={{ background: SAND }}
                    >
                      <img
                        src={item.product.img}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                      <span
                        className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                        style={{
                          background: CORAL,
                          color: IVORY,
                          fontFamily: "Inter,sans-serif",
                          fontWeight: 600,
                          fontSize: 10,
                        }}
                      >
                        {item.qty}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        style={{
                          fontFamily: "Inter,sans-serif",
                          fontSize: 13,
                          color: CHARCOAL,
                          lineHeight: 1.3,
                        }}
                      >
                        {item.product.name}
                      </p>
                      <p
                        style={{
                          fontFamily: "Inter,sans-serif",
                          fontSize: 11,
                          color: SLATE,
                        }}
                      >
                        {item.weight}
                      </p>
                    </div>
                    <p
                      style={{
                        fontFamily: "Inter,sans-serif",
                        fontWeight: 600,
                        fontSize: 13,
                        color: NAVY,
                        flexShrink: 0,
                      }}
                    >
                      PKR {(item.product.price * item.qty).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
              <div
                className="border-t pt-5 space-y-3"
                style={{ borderColor: "rgba(12,35,64,0.1)" }}
              >
                <div className="flex justify-between">
                  <span
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontSize: 13,
                      color: SLATE,
                    }}
                  >
                    Subtotal
                  </span>
                  <span
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontSize: 13,
                      color: NAVY,
                    }}
                  >
                    PKR {subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontSize: 13,
                      color: SLATE,
                    }}
                  >
                    Shipping
                  </span>
                  <span
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontSize: 13,
                      color: shipping === 0 ? CORAL : NAVY,
                    }}
                  >
                    {shipping === 0 ? "Free" : `PKR ${shipping}`}
                  </span>
                </div>
                <div
                  className="flex justify-between pt-3 border-t"
                  style={{ borderColor: "rgba(12,35,64,0.1)" }}
                >
                  <span
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontWeight: 600,
                      fontSize: 14,
                      color: NAVY,
                    }}
                  >
                    Total
                  </span>
                  <span
                    style={{
                      fontFamily: "Fraunces,serif",
                      fontWeight: 600,
                      fontSize: 18,
                      color: NAVY,
                    }}
                  >
                    PKR {total.toLocaleString()}
                  </span>
                </div>
              </div>
              {payment === "cod" && (
                <div
                  className="mt-5 p-4 flex items-start gap-3"
                  style={{
                    background: "rgba(255,98,104,0.07)",
                    border: "1px solid rgba(255,98,104,0.25)",
                  }}
                >
                  <Package
                    size={16}
                    style={{ color: CORAL, flexShrink: 0, marginTop: 1 }}
                  />
                  <p
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontSize: 12,
                      lineHeight: 1.6,
                      color: CHARCOAL,
                    }}
                  >
                    You'll pay <strong>PKR {total.toLocaleString()}</strong> in
                    cash when your order is delivered.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PAGE: ORDER CONFIRMATION
// ══════════════════════════════════════════════════════════════════════════════
function ConfirmationPage() {
  const { navigate } = useApp();
  const orderNum = `PS-${Math.floor(100000 + Math.random() * 900000)}`;
  return (
    <div
      style={{ background: NAVY, minHeight: "100svh" }}
      className="flex flex-col items-center justify-center px-6 py-20"
    >
      <div className="flex flex-col items-center text-center max-w-lg">
        {/* Check circle */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-8"
          style={{ border: `1px solid rgba(244,242,239,0.3)` }}
        >
          <Check size={36} style={{ color: IVORY }} strokeWidth={1} />
        </div>
        <p
          style={{
            fontFamily: "Inter,sans-serif",
            fontWeight: 400,
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(244,242,239,0.5)",
            marginBottom: 12,
          }}
        >
          Order Confirmed
        </p>
        <h1
          style={{
            fontFamily: "Fraunces,serif",
            fontWeight: 400,
            fontSize: "clamp(2rem,5vw,3.5rem)",
            color: IVORY,
            lineHeight: 1.15,
            marginBottom: 16,
          }}
        >
          Thank <em style={{ fontStyle: "italic" }}>you</em>
        </h1>
        <p
          style={{
            fontFamily: "Inter,sans-serif",
            fontSize: 14,
            lineHeight: 1.75,
            color: "rgba(244,242,239,0.6)",
            marginBottom: 8,
          }}
        >
          Your order has been received and is being prepared for dispatch.
        </p>
        <p
          style={{
            fontFamily: "Inter,sans-serif",
            fontSize: 13,
            color: "rgba(244,242,239,0.45)",
            marginBottom: 32,
          }}
        >
          A confirmation will be sent via SMS or WhatsApp.
        </p>
        <div
          className="w-full p-6 mb-10"
          style={{ border: "1px solid rgba(244,242,239,0.15)" }}
        >
          <div className="grid grid-cols-2 gap-6 text-left">
            {[
              { label: "Order Number", value: orderNum },
              { label: "Payment", value: "Cash on Delivery" },
              { label: "Estimated Delivery", value: "3–5 business days" },
              { label: "Support", value: "+92 300 123 4567" },
            ].map((r) => (
              <div key={r.label}>
                <p
                  style={{
                    fontFamily: "Inter,sans-serif",
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(244,242,239,0.4)",
                    marginBottom: 4,
                  }}
                >
                  {r.label}
                </p>
                <p
                  style={{
                    fontFamily: "Inter,sans-serif",
                    fontSize: 13,
                    color: IVORY,
                  }}
                >
                  {r.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <PrimaryBtn onClick={() => navigate("home")}>
          Continue Shopping
        </PrimaryBtn>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PAGE: ABOUT
// ══════════════════════════════════════════════════════════════════════════════
function AboutPage() {
  return (
    <div style={{ background: IVORY, minHeight: "100svh", paddingTop: 0 }}>
      {/* Hero banner */}
      <div
        className="relative h-80 overflow-hidden"
        style={{ background: NAVY }}
      >
        <img
          src={IMG.mountain}
          alt="Khewra Salt Range landscape"
          className="w-full h-full object-cover"
          style={{ opacity: 0.5 }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <Eyebrow light>Since 1980</Eyebrow>
          <h1
            style={{
              fontFamily: "Fraunces,serif",
              fontWeight: 400,
              fontSize: "clamp(2rem,5vw,3.5rem)",
              color: IVORY,
              lineHeight: 1.15,
            }}
          >
            Our <em style={{ fontStyle: "italic" }}>story</em>
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-20">
        {/* Founding */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
          <FadeUp>
            <BrandMark />
            <Eyebrow>The Beginning</Eyebrow>
            <h2
              style={{
                fontFamily: "Fraunces,serif",
                fontWeight: 400,
                fontSize: "clamp(1.5rem,3vw,2.2rem)",
                color: NAVY,
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              Four decades of{" "}
              <em style={{ fontStyle: "italic" }}>honest craft</em>
            </h2>
            <p
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 14,
                lineHeight: 1.85,
                color: CHARCOAL,
                marginBottom: 16,
              }}
            >
              Premier Salt Industries was founded in 1980 by the Chaudhry family
              in Pind Dadan Khan — a town in Punjab's Salt Range district that
              has lived alongside the Khewra mine for centuries. What began as a
              small processing unit supplying regional markets has grown into
              one of Pakistan's largest Himalayan salt exporters.
            </p>
            <p
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 14,
                lineHeight: 1.85,
                color: CHARCOAL,
              }}
            >
              We've never taken outside investment, never compromised on
              raw-material sourcing, and never outsourced our processing. The
              decisions that matter are still made within 50 kilometres of the
              mine.
            </p>
          </FadeUp>
          <div
            className="aspect-[4/3] overflow-hidden"
            style={{ background: SAND }}
          >
            <img
              src={IMG.crystals}
              alt="Himalayan salt crystals"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <Divider className="mb-20" />

        {/* Khewra */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
          <div
            className="order-2 lg:order-1 aspect-[4/3] overflow-hidden"
            style={{ background: SAND }}
          >
            <img
              src={IMG.cave}
              alt="Inside the Khewra salt mine"
              className="w-full h-full object-cover"
            />
          </div>
          <FadeUp className="order-1 lg:order-2">
            <BrandMark />
            <Eyebrow>The Khewra Salt Range</Eyebrow>
            <h2
              style={{
                fontFamily: "Fraunces,serif",
                fontWeight: 400,
                fontSize: "clamp(1.5rem,3vw,2.2rem)",
                color: NAVY,
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              250 million years in{" "}
              <em style={{ fontStyle: "italic" }}>the making</em>
            </h2>
            <p
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 14,
                lineHeight: 1.85,
                color: CHARCOAL,
                marginBottom: 16,
              }}
            >
              The Khewra Salt Mine is the world's second-largest salt mine and
              the largest source of Himalayan pink salt. The deposit formed
              during the Precambrian era when a shallow inland sea evaporated,
              leaving behind a vast crystalline mineral body across the Salt
              Range.
            </p>
            <p
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 14,
                lineHeight: 1.85,
                color: CHARCOAL,
              }}
            >
              The pink colour comes from trace iron oxide — a natural,
              unbleached signature of the deposit. No artificial colouring, no
              additives. Just salt, as it has been for 250 million years.
            </p>
          </FadeUp>
        </div>

        <Divider className="mb-20" />

        {/* Sustainability */}
        <FadeUp className="text-center mb-16">
          <BrandMark />
          <Eyebrow>Sustainability</Eyebrow>
          <h2
            style={{
              fontFamily: "Fraunces,serif",
              fontWeight: 400,
              fontSize: "clamp(1.5rem,3vw,2.2rem)",
              color: NAVY,
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Mining for the{" "}
            <em style={{ fontStyle: "italic" }}>next generation</em>
          </h2>
          <p
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: 14,
              lineHeight: 1.85,
              color: CHARCOAL,
              maxWidth: 680,
              margin: "0 auto",
            }}
          >
            Khewra has been mined for over 700 years. We intend it to supply the
            world for 700 more. Our extraction methods follow the
            room-and-pillar technique — leaving salt pillars in place to support
            the mine structure, ensuring long-term geological stability. We
            replant native vegetation around our processing facility and operate
            a zero-liquid-discharge plant.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              value: "< 2%",
              label: "Extraction rate of proven reserves per decade",
            },
            { value: "100%", label: "Facility powered by grid + solar mix" },
            {
              value: "Zero",
              label: "Liquid discharge from our processing plant",
            },
          ].map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.12}>
              <motion.div
                className="p-8 text-center"
                style={{ border: "1px solid rgba(12,35,64,0.12)" }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 8px 24px rgba(12,35,64,0.08)",
                }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                <p
                  style={{
                    fontFamily: "Fraunces,serif",
                    fontWeight: 600,
                    fontSize: "2.5rem",
                    color: CORAL,
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontFamily: "Inter,sans-serif",
                    fontSize: 12,
                    lineHeight: 1.7,
                    color: SLATE,
                  }}
                >
                  {s.label}
                </p>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PAGE: WHOLESALE
// ══════════════════════════════════════════════════════════════════════════════
function WholesalePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    country: "",
    product: "",
    moq: "",
    notes: "",
  });
  const set =
    (k: string) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));
  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    border: "1px solid rgba(12,35,64,0.2)",
    background: "transparent",
    fontFamily: "Inter,sans-serif",
    fontSize: 13,
    color: CHARCOAL,
    outline: "none",
  };

  return (
    <div style={{ background: IVORY, minHeight: "100svh", paddingTop: 0 }}>
      {/* Banner */}
      <div
        className="relative h-72 overflow-hidden"
        style={{ background: NAVY }}
      >
        <img
          src={IMG.packaging}
          alt="Premier Salt wholesale packaging"
          className="w-full h-full object-cover"
          style={{ opacity: 0.45 }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <Eyebrow light>For Importers & Brands</Eyebrow>
          <h1
            style={{
              fontFamily: "Fraunces,serif",
              fontWeight: 400,
              fontSize: "clamp(2rem,5vw,3.5rem)",
              color: IVORY,
              lineHeight: 1.15,
            }}
          >
            Wholesale & <em style={{ fontStyle: "italic" }}>Private Label</em>
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-20">
        {/* Why us */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Source Direct",
              body: "We are the manufacturer, not a trading company. You deal directly with the people who process and pack your order — no middlemen, no markup layers.",
            },
            {
              title: "Private Label Ready",
              body: "Full branding service: custom label design, Pantone-matched packaging, multiple pack formats. MOQ from 500 kg per SKU for most products.",
            },
            {
              title: "Certified for Every Market",
              body: "ISO 9001, FDA Registered, Kosher, Halal, GFSI, Gluten-Free, Vegan certified. Full documentation issued with every shipment.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="p-8"
              style={{ border: "1px solid rgba(12,35,64,0.12)" }}
            >
              <div className="mb-3">
                <BrandMark />
              </div>
              <p
                style={{
                  fontFamily: "Fraunces,serif",
                  fontWeight: 400,
                  fontSize: 18,
                  color: NAVY,
                  marginBottom: 10,
                  lineHeight: 1.2,
                }}
              >
                {c.title}
              </p>
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: 13,
                  lineHeight: 1.75,
                  color: SLATE,
                }}
              >
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <Divider className="mb-20" />

        {/* Markets */}
        <div className="mb-20">
          <BrandMark />
          <Eyebrow>Global Presence</Eyebrow>
          <h2
            style={{
              fontFamily: "Fraunces,serif",
              fontWeight: 400,
              fontSize: "clamp(1.5rem,3vw,2.2rem)",
              color: NAVY,
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            90+ countries, <em style={{ fontStyle: "italic" }}>one source</em>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              ["🇺🇸", "USA"],
              ["🇩🇪", "Germany"],
              ["🇬🇧", "United Kingdom"],
              ["🇦🇺", "Australia"],
              ["🇯🇵", "Japan"],
              ["🇦🇪", "UAE"],
              ["🇫🇷", "France"],
              ["🇨🇦", "Canada"],
            ].map(([flag, country]) => (
              <div
                key={country}
                className="flex items-center gap-3 p-4"
                style={{ border: "1px solid rgba(12,35,64,0.1)" }}
              >
                <span style={{ fontSize: 22 }}>{flag}</span>
                <span
                  style={{
                    fontFamily: "Inter,sans-serif",
                    fontSize: 13,
                    color: NAVY,
                  }}
                >
                  {country}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Divider className="mb-20" />

        {/* Quote form */}
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <BrandMark />
            <Eyebrow>Get in Touch</Eyebrow>
            <h2
              style={{
                fontFamily: "Fraunces,serif",
                fontWeight: 400,
                fontSize: "clamp(1.5rem,3vw,2.2rem)",
                color: NAVY,
                lineHeight: 1.2,
                marginBottom: 12,
              }}
            >
              Request a <em style={{ fontStyle: "italic" }}>quote</em>
            </h2>
            <p
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 13,
                lineHeight: 1.8,
                color: SLATE,
                marginBottom: 24,
              }}
            >
              Fill in the form and our export team will respond within one
              business day with pricing, samples, and certification documents.
            </p>
            <div
              className="space-y-3"
              style={{ border: "1px solid rgba(255,98,104,0.3)", padding: 24 }}
            >
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontWeight: 500,
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: CORAL,
                  marginBottom: 12,
                }}
              >
                Typical lead times
              </p>
              {[
                ["Sample shipment", "3–5 business days"],
                ["First commercial order", "7–14 business days"],
                ["Repeat orders", "5–10 business days"],
              ].map(([item, time]) => (
                <div key={item} className="flex justify-between">
                  <span
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontSize: 12,
                      color: SLATE,
                    }}
                  >
                    {item}
                  </span>
                  <span
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontWeight: 500,
                      fontSize: 12,
                      color: NAVY,
                    }}
                  >
                    {time}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-full gap-5 py-12">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: CORAL }}
                >
                  <Check size={20} style={{ color: IVORY }} />
                </div>
                <p
                  style={{
                    fontFamily: "Fraunces,serif",
                    fontStyle: "italic",
                    fontSize: 22,
                    color: NAVY,
                  }}
                >
                  Request received.
                </p>
                <p
                  style={{
                    fontFamily: "Inter,sans-serif",
                    fontSize: 13,
                    lineHeight: 1.75,
                    color: SLATE,
                  }}
                >
                  Our export team will be in touch within one business day.
                  Thank you for your interest in Premier Salt.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                {[
                  [
                    "Company / Brand Name",
                    "company",
                    "e.g. Natural Foods GmbH",
                  ],
                  ["Your Name", "name", "e.g. John Smith"],
                  ["Email Address", "email", "you@company.com"],
                  ["Country", "country", "e.g. Germany"],
                ].map(([label, key, placeholder]) => (
                  <div key={key}>
                    <label
                      style={{
                        fontFamily: "Inter,sans-serif",
                        fontSize: 11,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: NAVY,
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      {label} *
                    </label>
                    <input
                      required
                      value={(form as Record<string, string>)[key]}
                      onChange={set(key)}
                      placeholder={placeholder}
                      style={inputStyle}
                    />
                  </div>
                ))}
                <div>
                  <label
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: NAVY,
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    Product Interest *
                  </label>
                  <select
                    required
                    value={form.product}
                    onChange={set("product")}
                    style={{ ...inputStyle, cursor: "pointer" }}
                  >
                    <option value="">Select a product category</option>
                    {[
                      "Edible & Gourmet Salt",
                      "Salt Lamps",
                      "Bath & Spa Salt",
                      "Grill Plates & Slabs",
                      "Gift Sets",
                      "Mixed / Multiple",
                    ].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: NAVY,
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    Additional Notes
                  </label>
                  <textarea
                    value={form.notes}
                    onChange={set("notes")}
                    rows={3}
                    placeholder="Packaging requirements, certifications needed, delivery port…"
                    style={{ ...inputStyle, resize: "none" }}
                  />
                </div>
                <PrimaryBtn type="submit" fullWidth>
                  Submit Enquiry <ArrowRight size={13} />
                </PrimaryBtn>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PAGE: JOURNAL
// ══════════════════════════════════════════════════════════════════════════════
const ALL_POSTS = [
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

function JournalPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const cats = [
    "All",
    "Origins",
    "Wellness",
    "Sustainability",
    "Recipes",
    "Trade",
  ];
  const filtered = ALL_POSTS.filter(
    (p) => activeCategory === "All" || p.cat === activeCategory,
  );

  return (
    <div style={{ background: IVORY, minHeight: "100svh", paddingTop: 0 }}>
      <FadeUp>
        <div
          className="border-b py-14 px-8 text-center"
          style={{ borderColor: "rgba(12,35,64,0.1)" }}
        >
          <Eyebrow>Stories & Insights</Eyebrow>
          <h1
            style={{
              fontFamily: "Fraunces,serif",
              fontWeight: 400,
              fontSize: "clamp(2rem,5vw,3.5rem)",
              color: NAVY,
              lineHeight: 1.15,
            }}
          >
            The <em style={{ fontStyle: "italic" }}>Journal</em>
          </h1>
        </div>
      </FadeUp>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className="px-5 py-2 transition-all"
              style={{
                border: `1px solid ${activeCategory === c ? NAVY : "rgba(12,35,64,0.2)"}`,
                background: activeCategory === c ? NAVY : "transparent",
                color: activeCategory === c ? IVORY : NAVY,
                fontFamily: "Inter,sans-serif",
                fontSize: 11,
                letterSpacing: "0.1em",
                cursor: "pointer",
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Featured post */}
        {filtered.length > 0 && (
          <div className="grid lg:grid-cols-2 gap-10 mb-12 cursor-pointer group">
            <div
              className="aspect-[4/3] overflow-hidden"
              style={{ background: SAND }}
            >
              <img
                src={filtered[0].img}
                alt={filtered[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontWeight: 500,
                  fontSize: 9,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: CORAL,
                  marginBottom: 10,
                }}
              >
                {filtered[0].cat} · {filtered[0].date} · {filtered[0].read} read
              </p>
              <h2
                style={{
                  fontFamily: "Fraunces,serif",
                  fontWeight: 400,
                  fontSize: "clamp(1.3rem,2.5vw,1.9rem)",
                  color: NAVY,
                  lineHeight: 1.3,
                  marginBottom: 14,
                }}
              >
                {filtered[0].title}
              </h2>
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: SLATE,
                  marginBottom: 20,
                }}
              >
                {filtered[0].excerpt}
              </p>
              <TextLink>Read article</TextLink>
            </div>
          </div>
        )}

        <Divider className="mb-12" />

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.slice(1).map((p, i) => (
            <article key={i} className="group cursor-pointer">
              <div
                className="aspect-[4/3] overflow-hidden mb-5"
                style={{ background: SAND }}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontWeight: 500,
                  fontSize: 9,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: CORAL,
                  marginBottom: 8,
                }}
              >
                {p.cat} · {p.date} · {p.read} read
              </p>
              <h3
                style={{
                  fontFamily: "Fraunces,serif",
                  fontWeight: 400,
                  fontSize: "clamp(1rem,1.8vw,1.15rem)",
                  color: NAVY,
                  lineHeight: 1.35,
                  marginBottom: 8,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: SLATE,
                  marginBottom: 12,
                }}
              >
                {p.excerpt.slice(0, 100)}…
              </p>
              <TextLink>Read more</TextLink>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PAGE: CONTACT
// ══════════════════════════════════════════════════════════════════════════════
function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const set =
    (k: string) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));
  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    border: "1px solid rgba(12,35,64,0.2)",
    background: "transparent",
    fontFamily: "Inter,sans-serif",
    fontSize: 13,
    color: CHARCOAL,
    outline: "none",
  };

  return (
    <div style={{ background: IVORY, minHeight: "100svh", paddingTop: 0 }}>
      <FadeUp>
        <div
          className="border-b py-14 px-8 text-center"
          style={{ borderColor: "rgba(12,35,64,0.1)" }}
        >
          <Eyebrow>Get in Touch</Eyebrow>
          <h1
            style={{
              fontFamily: "Fraunces,serif",
              fontWeight: 400,
              fontSize: "clamp(2rem,5vw,3.5rem)",
              color: NAVY,
              lineHeight: 1.15,
            }}
          >
            We'd love to <em style={{ fontStyle: "italic" }}>hear from you</em>
          </h1>
        </div>
      </FadeUp>

      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info column */}
          <FadeUp>
            <BrandMark />
            <Eyebrow>Contact Information</Eyebrow>
            <h2
              style={{
                fontFamily: "Fraunces,serif",
                fontWeight: 400,
                fontSize: "clamp(1.4rem,2.5vw,1.9rem)",
                color: NAVY,
                lineHeight: 1.2,
                marginBottom: 24,
              }}
            >
              One team for retail <em style={{ fontStyle: "italic" }}>and</em>{" "}
              trade
            </h2>
            <p
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 14,
                lineHeight: 1.85,
                color: SLATE,
                marginBottom: 32,
              }}
            >
              Whether you're a home customer with a question about your order,
              or an importer negotiating a container shipment — our team picks
              up.
            </p>

            <div className="space-y-6">
              {[
                {
                  Icon: MapPin,
                  label: "Address",
                  value:
                    "Industrial Estate, Khushab Road\nPind Dadan Khan, Punjab 41300\nPakistan",
                },
                { Icon: Phone, label: "Phone", value: "+92 300 123 4567" },
                {
                  Icon: MessageCircle,
                  label: "WhatsApp",
                  value: "+92 300 123 4567",
                },
                {
                  Icon: Mail,
                  label: "Email",
                  value: "info@premiersalt.com.pk",
                },
                {
                  Icon: Clock,
                  label: "Hours",
                  value: "Mon–Sat, 9:00am – 6:00pm PKT",
                },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                    style={{ border: "1px solid rgba(12,35,64,0.15)" }}
                  >
                    <Icon
                      size={15}
                      style={{ color: CORAL }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "Inter,sans-serif",
                        fontWeight: 500,
                        fontSize: 11,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: NAVY,
                        marginBottom: 2,
                      }}
                    >
                      {label}
                    </p>
                    <p
                      style={{
                        fontFamily: "Inter,sans-serif",
                        fontSize: 13,
                        lineHeight: 1.7,
                        color: SLATE,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-10 p-6"
              style={{ border: "1px solid rgba(255,98,104,0.3)" }}
            >
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontWeight: 500,
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: CORAL,
                  marginBottom: 10,
                }}
              >
                For wholesale enquiries
              </p>
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: 13,
                  lineHeight: 1.75,
                  color: CHARCOAL,
                }}
              >
                Please use the dedicated wholesale enquiry form for bulk orders,
                private-label requests, and export documentation. Our export
                team responds within one business day.
              </p>
            </div>
          </FadeUp>

          {/* Form column */}
          <div>
            {submitted ? (
              <div className="flex flex-col gap-5 py-16">
                <div
                  className="w-12 h-12 flex items-center justify-center"
                  style={{ border: `1px solid ${CORAL}` }}
                >
                  <Check size={20} style={{ color: CORAL }} />
                </div>
                <p
                  style={{
                    fontFamily: "Fraunces,serif",
                    fontStyle: "italic",
                    fontSize: 22,
                    color: NAVY,
                  }}
                >
                  Message sent.
                </p>
                <p
                  style={{
                    fontFamily: "Inter,sans-serif",
                    fontSize: 14,
                    lineHeight: 1.75,
                    color: SLATE,
                  }}
                >
                  We'll be in touch within one business day. Thank you for
                  reaching out to Premier Salt.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      style={{
                        fontFamily: "Inter,sans-serif",
                        fontSize: 11,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: NAVY,
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      Name *
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Your full name"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        fontFamily: "Inter,sans-serif",
                        fontSize: 11,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: NAVY,
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      placeholder="you@example.com"
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div>
                  <label
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: NAVY,
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    Subject *
                  </label>
                  <select
                    required
                    value={form.subject}
                    onChange={set("subject")}
                    style={{ ...inputStyle, cursor: "pointer" }}
                  >
                    <option value="">Select a topic</option>
                    {[
                      "Order / Delivery Query",
                      "Product Question",
                      "Wholesale Enquiry",
                      "Press / Media",
                      "General",
                    ].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: NAVY,
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    required
                    value={form.message}
                    onChange={set("message")}
                    rows={6}
                    placeholder="How can we help?"
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>
                <PrimaryBtn type="submit" fullWidth>
                  Send Message <ArrowRight size={13} />
                </PrimaryBtn>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// HOME PAGE
// ══════════════════════════════════════════════════════════════════════════════
function HomePage() {
  return (
    <>
      <Hero />
      <IntroCards />
      <QuoteMoment />
      <CollectionScroller />
      <Marquee />
      <StatsSection />
      <CategoriesSection />
      <JourneySection />
      <ProductCarousel />
      <WholesaleCallout />
      <TestimonialsSection />
      <JournalTeaser />
      <Newsletter />
    </>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// ROOT APP
// ══════════════════════════════════════════════════════════════════════════════
export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  // Scroll to top on page change
  const navigate = useCallback((p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const addToCart = useCallback((product: Product, weight: string) => {
    setCart((prev) => {
      const existing = prev.find(
        (i) => i.product.id === product.id && i.weight === weight,
      );
      if (existing)
        return prev.map((i) =>
          i.product.id === product.id && i.weight === weight
            ? { ...i, qty: i.qty + 1 }
            : i,
        );
      return [...prev, { product, qty: 1, weight }];
    });
  }, []);

  const removeFromCart = useCallback((id: number) => {
    setCart((prev) => prev.filter((i) => i.product.id !== id));
  }, []);

  const updateQty = useCallback((id: number, qty: number) => {
    setCart((prev) =>
      prev.map((i) => (i.product.id === id ? { ...i, qty } : i)),
    );
  }, []);

  const showFooter = !["checkout", "confirmation"].includes(page);

  return (
    <Ctx.Provider
      value={{
        page,
        navigate,
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        cartOpen,
        setCartOpen,
        selectedProduct,
        setSelectedProduct,
      }}
    >
      <div style={{ fontFamily: "Inter,sans-serif", background: IVORY }}>
        {/* Sticky nav wrapper — announcement bar + header travel together */}
        <div className="sticky top-0 z-40">
          <AnnouncementBar />
          <Header
            scrolled={scrolled}
            isHero={page === "home" || page === "confirmation"}
          />
        </div>
        <main>
          {page === "home" && <HomePage />}
          {page === "shop" && <ShopPage />}
          {page === "product" && <ProductDetailPage />}
          {page === "checkout" && <CheckoutPage />}
          {page === "confirmation" && <ConfirmationPage />}
          {page === "about" && <AboutPage />}
          {page === "wholesale" && <WholesalePage />}
          {page === "journal" && <JournalPage />}
          {page === "contact" && <ContactPage />}
        </main>
        {showFooter && <Footer />}
        <CartDrawer />
      </div>
    </Ctx.Provider>
  );
}
