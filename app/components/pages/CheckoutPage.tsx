"use client";

import { useState } from "react";
import { ArrowRight, Package, Clock } from "lucide-react";
import { COLORS, CHECKOUT_PROVINCES } from "@/data/constants";
import { PrimaryBtn } from "@/components/common";
import { useApp } from "@/context/AppContext";
import { useNav } from "@/hooks/useNav";

export function CheckoutPage() {
  const { cart } = useApp();
  const { navigate } = useNav();
  const [payment, setPayment] = useState<"cod" | "online">("cod");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    province: CHECKOUT_PROVINCES[0],
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
    color: COLORS.CHARCOAL,
    outline: "none",
  };

  return (
    <div style={{ background: COLORS.IVORY, minHeight: "100svh", paddingTop: 0 }}>
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
              color: COLORS.SLATE,
              cursor: "pointer",
              fontSize: 11,
            }}
          >
            Home
          </button>
          <span style={{ color: COLORS.SLATE, fontSize: 11 }}>/</span>
          <span
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: 11,
              color: COLORS.NAVY,
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
                color: COLORS.NAVY,
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
                      color: COLORS.NAVY,
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
                      color: COLORS.NAVY,
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
                    color: COLORS.NAVY,
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
                      color: COLORS.NAVY,
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
                      color: COLORS.NAVY,
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
                    {CHECKOUT_PROVINCES.map((p) => (
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
                    color: COLORS.NAVY,
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
                      border: `1px solid ${payment === "cod" ? COLORS.CORAL : "rgba(12,35,64,0.2)"}`,
                      background: payment === "cod" ? "#FFF5F5" : "transparent",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded-full border-2 flex items-center justify-center"
                          style={{
                            borderColor:
                              payment === "cod" ? COLORS.CORAL : "rgba(12,35,64,0.3)",
                          }}
                        >
                          {payment === "cod" && (
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{ background: COLORS.CORAL }}
                            />
                          )}
                        </div>
                        <Package
                          size={18}
                          style={{ color: payment === "cod" ? COLORS.CORAL : COLORS.SLATE }}
                          strokeWidth={1.5}
                        />
                        <div>
                          <p
                            style={{
                              fontFamily: "Inter,sans-serif",
                              fontWeight: 600,
                              fontSize: 13,
                              color: COLORS.NAVY,
                            }}
                          >
                            Cash on Delivery
                          </p>
                          <p
                            style={{
                              fontFamily: "Inter,sans-serif",
                              fontSize: 11,
                              color: COLORS.SLATE,
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
                            background: COLORS.CORAL,
                            color: COLORS.IVORY,
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
                      border: `1px solid ${payment === "online" ? COLORS.NAVY : "rgba(12,35,64,0.2)"}`,
                      background: "transparent",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded-full border-2 flex items-center justify-center"
                        style={{
                          borderColor:
                            payment === "online" ? COLORS.NAVY : "rgba(12,35,64,0.3)",
                        }}
                      >
                        {payment === "online" && (
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ background: COLORS.NAVY }}
                          />
                        )}
                      </div>
                      <Clock
                        size={18}
                        style={{ color: payment === "online" ? COLORS.NAVY : COLORS.SLATE }}
                        strokeWidth={1.5}
                      />
                      <div>
                        <p
                          style={{
                            fontFamily: "Inter,sans-serif",
                            fontWeight: 600,
                            fontSize: 13,
                            color: COLORS.NAVY,
                          }}
                        >
                          Pay Online
                        </p>
                        <p
                          style={{
                            fontFamily: "Inter,sans-serif",
                            fontSize: 11,
                            color: COLORS.SLATE,
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
                <PrimaryBtn className="w-full">
                  Place Order <ArrowRight size={13} />
                </PrimaryBtn>
                <p
                  className="text-center mt-4"
                  style={{
                    fontFamily: "Inter,sans-serif",
                    fontSize: 11,
                    color: COLORS.SLATE,
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
                background: COLORS.IVORY,
              }}
            >
              <p
                style={{
                  fontFamily: "Fraunces,serif",
                  fontWeight: 400,
                  fontSize: 18,
                  color: COLORS.NAVY,
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
                      style={{ background: COLORS.SAND }}
                    >
                      <img
                        src={item.product.img}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                      <span
                        className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                        style={{
                          background: COLORS.CORAL,
                          color: COLORS.IVORY,
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
                          color: COLORS.CHARCOAL,
                          lineHeight: 1.3,
                        }}
                      >
                        {item.product.name}
                      </p>
                      <p
                        style={{
                          fontFamily: "Inter,sans-serif",
                          fontSize: 11,
                          color: COLORS.SLATE,
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
                        color: COLORS.NAVY,
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
                      color: COLORS.SLATE,
                    }}
                  >
                    Subtotal
                  </span>
                  <span
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontSize: 13,
                      color: COLORS.NAVY,
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
                      color: COLORS.SLATE,
                    }}
                  >
                    Shipping
                  </span>
                  <span
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontSize: 13,
                      color: shipping === 0 ? COLORS.CORAL : COLORS.NAVY,
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
                      color: COLORS.NAVY,
                    }}
                  >
                    Total
                  </span>
                  <span
                    style={{
                      fontFamily: "Fraunces,serif",
                      fontWeight: 600,
                      fontSize: 18,
                      color: COLORS.NAVY,
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
                    style={{ color: COLORS.CORAL, flexShrink: 0, marginTop: 1 }}
                  />
                  <p
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontSize: 12,
                      lineHeight: 1.6,
                      color: COLORS.CHARCOAL,
                    }}
                  >
                    You&apos;ll pay <strong>PKR {total.toLocaleString()}</strong> in
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
