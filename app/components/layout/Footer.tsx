"use client";

import { COLORS } from "@/data/constants";
import { Divider } from "@/components/ui/divider";

export function Footer() {
  return (
    <footer
      style={{
        background: COLORS.NAVY,
        color: COLORS.IVORY,
        padding: "60px 20px 40px",
        fontFamily: "Inter,sans-serif",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          {/* Company */}
          <div>
            <h3
              style={{
                fontFamily: "Fraunces,serif",
                fontSize: 16,
                fontWeight: 600,
                marginBottom: 20,
              }}
            >
              PREMIER SALT
            </h3>
            <p style={{ fontSize: 13, opacity: 0.7, lineHeight: 1.6 }}>
              Premium Himalayan salt products sourced from the Khewra Salt Range,
              Pakistan.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 600, marginBottom: 12, opacity: 0.8 }}>
              SHOP
            </h4>
            <ul style={{ fontSize: 13, space: 1.6 }}>
              <li style={{ marginBottom: 8 }}>
                <button style={{ background: "none", border: "none", color: "inherit", cursor: "pointer" }}>
                  All Products
                </button>
              </li>
              <li style={{ marginBottom: 8 }}>
                <button style={{ background: "none", border: "none", color: "inherit", cursor: "pointer" }}>
                  Edible Salts
                </button>
              </li>
              <li style={{ marginBottom: 8 }}>
                <button style={{ background: "none", border: "none", color: "inherit", cursor: "pointer" }}>
                  Salt Lamps
                </button>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 600, marginBottom: 12, opacity: 0.8 }}>
              COMPANY
            </h4>
            <ul style={{ fontSize: 13, space: 1.6 }}>
              <li style={{ marginBottom: 8 }}>
                <button style={{ background: "none", border: "none", color: "inherit", cursor: "pointer" }}>
                  About Us
                </button>
              </li>
              <li style={{ marginBottom: 8 }}>
                <button style={{ background: "none", border: "none", color: "inherit", cursor: "pointer" }}>
                  Sustainability
                </button>
              </li>
              <li style={{ marginBottom: 8 }}>
                <button style={{ background: "none", border: "none", color: "inherit", cursor: "pointer" }}>
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 600, marginBottom: 12, opacity: 0.8 }}>
              CONTACT
            </h4>
            <p style={{ fontSize: 13, marginBottom: 8 }}>info@premiersalt.com.pk</p>
            <p style={{ fontSize: 13, marginBottom: 8 }}>+92 300 123 4567</p>
          </div>
        </div>

        <Divider />

        <div style={{ marginTop: 32, fontSize: 12, opacity: 0.6, textAlign: "center" }}>
          <p>&copy; 2024 Premier Salt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
