"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { AppCtx, CartItem, Page, Product } from "@/types";

const AppContextCreate = createContext<AppCtx | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<Page>("home");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const navigate = (p: Page, extra?: Record<string, unknown>) => {
    setPage(p);
    if (extra?.product) {
      setSelectedProduct(extra.product as Product);
    }
  };

  const addToCart = (product: Product, weight: string) => {
    const existing = cart.find(
      (item) => item.product.id === product.id && item.weight === weight
    );
    if (existing) {
      existing.qty += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { product, qty: 1, weight }]);
    }
    setCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.product.id !== id));
  };

  const updateQty = (id: number, qty: number) => {
    if (qty <= 0) {
      removeFromCart(id);
    } else {
      const item = cart.find((item) => item.product.id === id);
      if (item) {
        item.qty = qty;
        setCart([...cart]);
      }
    }
  };

  const value: AppCtx = {
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
  };

  return (
    <AppContextCreate.Provider value={value}>
      {children}
    </AppContextCreate.Provider>
  );
}

export function useApp(): AppCtx {
  const context = useContext(AppContextCreate);
  if (context === undefined) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
}
