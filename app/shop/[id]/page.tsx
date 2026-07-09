import { notFound } from "next/navigation";
import { ALL_PRODUCTS } from "@/data/products";
import { ProductDetailPage } from "@/components/pages/ProductDetailPage";
import { ProductPageShell } from "./ProductPageShell";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = ALL_PRODUCTS.find((p) => p.id === Number(id));

  if (!product) {
    notFound();
  }

  return (
    <ProductPageShell>
      {/* key forces a fresh mount when navigating between products, so the
          gallery/weight/qty/tab selection state resets automatically. */}
      <ProductDetailPage key={product.id} product={product} />
    </ProductPageShell>
  );
}
