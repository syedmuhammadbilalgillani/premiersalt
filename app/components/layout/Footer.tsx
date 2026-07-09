"use client";

import { COLORS } from "@/data/constants";
import { useNav, PageName } from "@/hooks/useNav";

const { NAVY, IVORY, CORAL } = COLORS;

export function Footer() {
  const { navigate } = useNav();
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
  ] as { h: string; links: [string, PageName][] }[];
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
              Premier Salt Industries Pvt Ltd — Pakistan&apos;s foremost Himalayan
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
            <div className="flex gap-4 mt-5" />
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
