export type Product = {
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

export type CartItem = { product: Product; qty: number; weight: string };

export type AppCtx = {
  cart: CartItem[];
  addToCart: (p: Product, weight: string) => void;
  removeFromCart: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  cartOpen: boolean;
  setCartOpen: (v: boolean) => void;
};
