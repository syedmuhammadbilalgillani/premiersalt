// import { useState } from "react";

// const ShopPage = () => {
//   const { navigate, setSelectedProduct, addToCart } = useApp();
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [sortBy, setSortBy] = useState("featured");
//   const [showFilter, setShowFilter] = useState(false);
//   const cats = ["All", "Edible", "Lamps", "Spa", "Grill"];
//   const filtered = ALL_PRODUCTS.filter(
//     (p) => activeCategory === "All" || p.category === activeCategory,
//   );
//   const sorted = [...filtered].sort((a, b) =>
//     sortBy === "price-asc"
//       ? a.price - b.price
//       : sortBy === "price-desc"
//         ? b.price - a.price
//         : sortBy === "rating"
//           ? b.rating - a.rating
//           : 0,
//   );

//   return (
//     <div style={{ background: IVORY, minHeight: "100svh", paddingTop: 0 }}>
//       {/* Page header */}
//       <FadeUp>
//         <div
//           className="border-b py-14 px-8 text-center"
//           style={{ borderColor: "rgba(12,35,64,0.1)" }}
//         >
//           <Eyebrow>All Products</Eyebrow>
//           <h1
//             style={{
//               fontFamily: "Fraunces,serif",
//               fontWeight: 400,
//               fontSize: "clamp(2rem,5vw,3.5rem)",
//               color: NAVY,
//               lineHeight: 1.15,
//             }}
//           >
//             The full <em style={{ fontStyle: "italic" }}>collection</em>
//           </h1>
//         </div>
//       </FadeUp>

//       <div className="max-w-7xl mx-auto px-8 py-10">
//         {/* Filters bar */}
//         <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
//           <div className="flex flex-wrap gap-2">
//             {cats.map((c) => (
//               <button
//                 key={c}
//                 onClick={() => setActiveCategory(c)}
//                 className="px-5 py-2 transition-all"
//                 style={{
//                   border: `1px solid ${activeCategory === c ? NAVY : "rgba(12,35,64,0.2)"}`,
//                   background: activeCategory === c ? NAVY : "transparent",
//                   color: activeCategory === c ? IVORY : NAVY,
//                   fontFamily: "Inter,sans-serif",
//                   fontSize: 11,
//                   letterSpacing: "0.1em",
//                   cursor: "pointer",
//                 }}
//               >
//                 {c}
//               </button>
//             ))}
//           </div>
//           <div className="flex items-center gap-3">
//             <span
//               style={{
//                 fontFamily: "Inter,sans-serif",
//                 fontSize: 12,
//                 color: SLATE,
//               }}
//             >
//               {sorted.length} products
//             </span>
//             <select
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//               className="outline-none px-3 py-2"
//               style={{
//                 border: "1px solid rgba(12,35,64,0.2)",
//                 fontFamily: "Inter,sans-serif",
//                 fontSize: 12,
//                 color: NAVY,
//                 background: IVORY,
//                 cursor: "pointer",
//               }}
//             >
//               <option value="featured">Featured</option>
//               <option value="price-asc">Price: Low to High</option>
//               <option value="price-desc">Price: High to Low</option>
//               <option value="rating">Top Rated</option>
//             </select>
//           </div>
//         </div>

//         {/* Product grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-10">
//           {sorted.map((p, i) => (
//             <motion.div
//               key={p.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.45,
//                 delay: i * 0.07,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//             >
//               <ShopProductCard p={p} />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ShopPage;
// // ══════════════════════════════════════════════════════════════════════════════
// // PAGE: SHOP LISTING
// // ══════════════════════════════════════════════════════════════════════════════
// function ShopProductCard({ p }: { p: Product }) {
//   const { navigate, setSelectedProduct, addToCart } = useApp();
//   const [added, setAdded] = useState(false);
//   return (
//     <motion.div
//       className="cursor-pointer"
//       whileHover={{ y: -5 }}
//       transition={{ type: "spring", stiffness: 280, damping: 22 }}
//     >
//       <div
//         className="relative aspect-square overflow-hidden mb-4"
//         style={{ background: SAND }}
//         onClick={() => {
//           setSelectedProduct(p);
//           navigate("product");
//         }}
//       >
//         <motion.img
//           src={p.img}
//           alt={p.name}
//           className="w-full h-full object-cover"
//           whileHover={{ scale: 1.06 }}
//           transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
//         />
//         <motion.button
//           onClick={(e) => {
//             e.stopPropagation();
//             addToCart(p, p.weight[0]);
//             setAdded(true);
//             setTimeout(() => setAdded(false), 1500);
//           }}
//           className="absolute bottom-3 right-3 w-8 h-8 flex items-center justify-center border"
//           whileTap={{ scale: 0.88 }}
//           style={{
//             borderColor: added ? CORAL : "rgba(244,242,239,0.7)",
//             background: added ? CORAL : "rgba(244,242,239,0.85)",
//             color: added ? IVORY : NAVY,
//             transition: "background 0.25s, border-color 0.25s",
//           }}
//         >
//           {added ? <Check size={12} /> : <Plus size={12} />}
//         </motion.button>
//       </div>
//       <div
//         onClick={() => {
//           setSelectedProduct(p);
//           navigate("product");
//         }}
//       >
//         <p
//           style={{
//             fontFamily: "Fraunces,serif",
//             fontWeight: 400,
//             fontSize: 15,
//             color: CHARCOAL,
//             lineHeight: 1.3,
//             marginBottom: 4,
//           }}
//         >
//           {p.name}
//         </p>
//         <div className="flex items-center gap-1 mb-2">
//           <Stars rating={p.rating} />
//           <span
//             style={{
//               fontFamily: "Inter,sans-serif",
//               fontSize: 10,
//               color: SLATE,
//               marginLeft: 2,
//             }}
//           >
//             ({p.reviews})
//           </span>
//         </div>
//         <p
//           style={{
//             fontFamily: "Inter,sans-serif",
//             fontWeight: 600,
//             fontSize: 14,
//             color: NAVY,
//           }}
//         >
//           PKR {p.price.toLocaleString()}
//         </p>
//       </div>
//     </motion.div>
//   );
// }