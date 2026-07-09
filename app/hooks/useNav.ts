"use client";

import { useRouter } from "next/navigation";
import { Product } from "@/types";

export type PageName =
  | "home"
  | "shop"
  | "product"
  | "checkout"
  | "confirmation"
  | "about"
  | "contact"
  | "journal"
  | "wholesale";

const PAGE_TO_PATH: Record<PageName, string> = {
  home: "/",
  shop: "/shop",
  product: "/shop",
  checkout: "/checkout",
  confirmation: "/confirmation",
  about: "/about",
  contact: "/contact",
  journal: "/journal",
  wholesale: "/wholesale",
};

export function useNav() {
  const router = useRouter();

  const navigate = (p: PageName, extra?: { product?: Product }) => {
    if (p === "product" && extra?.product) {
      router.push(`/shop/${extra.product.id}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    router.push(PAGE_TO_PATH[p]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { navigate };
}
