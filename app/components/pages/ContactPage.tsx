"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Check,
  ArrowRight,
} from "lucide-react";
import { COLORS } from "@/data/constants";
import { BrandMark, Eyebrow, PrimaryBtn, FadeUp } from "@/components/common";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const set =
    (k: keyof ContactForm) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
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
      <FadeUp>
        <div
          className="border-b py-14 px-8 text-center"
          style={{ borderColor: "rgba(12,35,64,0.1)" }}
        >
          <Eyebrow>Get in Touch</Eyebrow>
          <h1
            style={{
              fontFamily: "Fraunces,serif",
              fontWeight: 400,
              fontSize: "clamp(2rem,5vw,3.5rem)",
              color: COLORS.NAVY,
              lineHeight: 1.15,
            }}
          >
            We&apos;d love to <em style={{ fontStyle: "italic" }}>hear from you</em>
          </h1>
        </div>
      </FadeUp>

      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info column */}
          <FadeUp>
            <BrandMark />
            <Eyebrow>Contact Information</Eyebrow>
            <h2
              style={{
                fontFamily: "Fraunces,serif",
                fontWeight: 400,
                fontSize: "clamp(1.4rem,2.5vw,1.9rem)",
                color: COLORS.NAVY,
                lineHeight: 1.2,
                marginBottom: 24,
              }}
            >
              One team for retail <em style={{ fontStyle: "italic" }}>and</em>{" "}
              trade
            </h2>
            <p
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 14,
                lineHeight: 1.85,
                color: COLORS.SLATE,
                marginBottom: 32,
              }}
            >
              Whether you&apos;re a home customer with a question about your order,
              or an importer negotiating a container shipment — our team picks
              up.
            </p>

            <div className="space-y-6">
              {[
                {
                  Icon: MapPin,
                  label: "Address",
                  value:
                    "Industrial Estate, Khushab Road\nPind Dadan Khan, Punjab 41300\nPakistan",
                },
                { Icon: Phone, label: "Phone", value: "+92 300 123 4567" },
                {
                  Icon: MessageCircle,
                  label: "WhatsApp",
                  value: "+92 300 123 4567",
                },
                {
                  Icon: Mail,
                  label: "Email",
                  value: "info@premiersalt.com.pk",
                },
                {
                  Icon: Clock,
                  label: "Hours",
                  value: "Mon–Sat, 9:00am – 6:00pm PKT",
                },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                    style={{ border: "1px solid rgba(12,35,64,0.15)" }}
                  >
                    <Icon
                      size={15}
                      style={{ color: COLORS.CORAL }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "Inter,sans-serif",
                        fontWeight: 500,
                        fontSize: 11,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: COLORS.NAVY,
                        marginBottom: 2,
                      }}
                    >
                      {label}
                    </p>
                    <p
                      style={{
                        fontFamily: "Inter,sans-serif",
                        fontSize: 13,
                        lineHeight: 1.7,
                        color: COLORS.SLATE,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-10 p-6"
              style={{ border: "1px solid rgba(255,98,104,0.3)" }}
            >
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontWeight: 500,
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: COLORS.CORAL,
                  marginBottom: 10,
                }}
              >
                For wholesale enquiries
              </p>
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: 13,
                  lineHeight: 1.75,
                  color: COLORS.CHARCOAL,
                }}
              >
                Please use the dedicated wholesale enquiry form for bulk orders,
                private-label requests, and export documentation. Our export
                team responds within one business day.
              </p>
            </div>
          </FadeUp>

          {/* Form column */}
          <div>
            {submitted ? (
              <div className="flex flex-col gap-5 py-16">
                <div
                  className="w-12 h-12 flex items-center justify-center"
                  style={{ border: `1px solid ${COLORS.CORAL}` }}
                >
                  <Check size={20} style={{ color: COLORS.CORAL }} />
                </div>
                <p
                  style={{
                    fontFamily: "Fraunces,serif",
                    fontStyle: "italic",
                    fontSize: 22,
                    color: COLORS.NAVY,
                  }}
                >
                  Message sent.
                </p>
                <p
                  style={{
                    fontFamily: "Inter,sans-serif",
                    fontSize: 14,
                    lineHeight: 1.75,
                    color: COLORS.SLATE,
                  }}
                >
                  We&apos;ll be in touch within one business day. Thank you for
                  reaching out to Premier Salt.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
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
                      Name *
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Your full name"
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
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      placeholder="you@example.com"
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
                    Subject *
                  </label>
                  <select
                    required
                    value={form.subject}
                    onChange={set("subject")}
                    style={{ ...inputStyle, cursor: "pointer" }}
                  >
                    <option value="">Select a topic</option>
                    {[
                      "Order / Delivery Query",
                      "Product Question",
                      "Wholesale Enquiry",
                      "Press / Media",
                      "General",
                    ].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
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
                    Message *
                  </label>
                  <textarea
                    required
                    value={form.message}
                    onChange={set("message")}
                    rows={6}
                    placeholder="How can we help?"
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>
                <PrimaryBtn className="w-full">
                  Send Message <ArrowRight size={13} />
                </PrimaryBtn>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
