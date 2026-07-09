"use client";

import { ArrowRight, Minus, Plus, ShoppingBag, X } from "lucide-react";
import { COLORS } from "@/data/constants";
import { useApp } from "@/context/AppContext";
import { useNav } from "@/hooks/useNav";
import { PrimaryBtn, TextLink } from "@/components/common";

const { IVORY, NAVY, SLATE, CHARCOAL, SAND } = COLORS;

export function CartDrawer() {
  const { cart, cartOpen, setCartOpen, updateQty, removeFromCart } = useApp();
  const { navigate } = useNav();
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
