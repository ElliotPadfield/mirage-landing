"use client";

import { motion } from "motion/react";

const features = [
  {
    title: "Click to teleport",
    description: "Click anywhere on the map. Your iPhone is there instantly.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
      </svg>
    ),
  },
  {
    title: "Save locations",
    description: "Bookmark your favourite spots. Switch between them in a tap.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "iOS 16 — 18",
    description:
      "Works across iOS versions. Legacy and modern tunnel protocols.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="3" />
        <line x1="12" y1="18" x2="12" y2="18.01" />
      </svg>
    ),
  },
  {
    title: "No jailbreak",
    description: "Connects over USB. No modifications to your device. Ever.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="relative z-10 px-6 pb-32 pt-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative rounded-2xl p-px overflow-hidden"
            >
              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background:
                    "conic-gradient(from 180deg at 50% 50%, transparent 0deg, rgba(99, 102, 241, 0.3) 120deg, transparent 240deg, rgba(99, 102, 241, 0.15) 360deg)",
                }}
              />
              {/* Card content */}
              <div className="relative rounded-2xl bg-[var(--color-surface)] p-8 h-full transition-colors duration-500 group-hover:bg-[#0c0c14]">
                <div className="text-[var(--color-accent-glow)] mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-[15px] font-medium text-[var(--color-text)] mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-[var(--color-text-muted)] font-light">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
