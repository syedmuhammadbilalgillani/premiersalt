"use client";

import { Plus, Minus, X } from "lucide-react";
import { COLORS } from "@/data/constants";
import { useApp } from "@/context/AppContext";
import { useNav } from "@/hooks/useNav";

export function CartDrawer() {
  const { cart, cartOpen, setCartOpen, removeFromCart, updateQty } = useApp();
  const { navigate } = useNav();

  const subtotal = cart.reduce((s, item) => s + item.product.price * item.qty, 0);
  const shipping = subtotal > 5000 ? 0 : 200;
  const total = subtotal + shipping;

  return (
    <>
      {/* Backdrop */}
      {cartOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20"
          onClick={() => setCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        style={{
          position: "fixed",
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: 50,
          width: "100%",
          maxWidth: 400,
          background: COLORS.IVORY,
          transform: cartOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: 20,
            borderBottom: `1px solid rgba(12,35,64,0.1)`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "Fraunces,serif",
              fontSize: 18,
              fontWeight: 600,
              color: COLORS.NAVY,
            }}
          >
            Cart
          </h2>
          <button
            onClick={() => setCartOpen(false)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <X size={20} color={COLORS.NAVY} />
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: 20 }}>
          {cart.length === 0 ? (
            <p style={{ color: COLORS.SLATE, fontSize: 14, textAlign: "center" }}>
              Your cart is empty
            </p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.product.id} style={{ borderBottom: "1px solid rgba(12,35,64,0.08)", paddingBottom: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <div>
                      <p style={{ fontWeight: 500, color: COLORS.NAVY, fontSize: 13 }}>
                        {item.product.name}
                      </p>
                      <p style={{ fontSize: 12, color: COLORS.SLATE }}>
                        {item.weight}
                      </p>
                    </div>
                    <p style={{ fontWeight: 600, color: COLORS.NAVY }}>
                      PKR {item.product.price * item.qty}
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <button
                      onClick={() => updateQty(item.product.id, item.qty - 1)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                      }}
                    >
                      <Minus size={16} color={COLORS.SLATE} />
                    </button>
                    <span style={{ fontSize: 14, fontWeight: 500, minWidth: 20, textAlign: "center" }}>
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQty(item.product.id, item.qty + 1)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                      }}
                    >
                      <Plus size={16} color={COLORS.SLATE} />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        marginLeft: "auto",
                      }}
                    >
                      <X size={16} color={COLORS.CORAL} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div style={{ padding: 20, borderTop: `1px solid rgba(12,35,64,0.1)` }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 13 }}>
              <span>Subtotal</span>
              <span>PKR {subtotal}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, fontSize: 13 }}>
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `PKR ${shipping}`}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 16,
                fontSize: 15,
                fontWeight: 600,
                paddingTop: 12,
                borderTop: `1px solid rgba(12,35,64,0.1)`,
              }}
            >
              <span>Total</span>
              <span>PKR {total}</span>
            </div>
            <button
              onClick={() => {
                setCartOpen(false);
                navigate("checkout");
              }}
              style={{
                width: "100%",
                padding: 12,
                background: COLORS.NAVY,
                color: COLORS.IVORY,
                border: "none",
                borderRadius: 6,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "Inter,sans-serif",
                fontSize: 13,
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
