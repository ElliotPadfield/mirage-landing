"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Globe from "@/components/Globe";
import ShaderBackground from "@/components/ShaderBackground";
import Features from "@/components/Features";

const GITHUB_URL = "https://github.com/ElliotPadfield/mirage";
const DOWNLOAD_URL =
  "https://github.com/ElliotPadfield/mirage/releases/latest";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const globeY = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const globeScale = useTransform(scrollYProgress, [0, 0.35], [1, 1.4]);
  const globeOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setScrollProgress(v);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <>
      <ShaderBackground />

      {/* Grain overlay */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-5"
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          background: "rgba(5, 5, 7, 0.6)",
        }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-[15px] font-medium tracking-tight text-[var(--color-text)]">
            Mirage
          </span>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-300"
          >
            GitHub
          </a>
        </div>
      </motion.nav>

      {/* Hero */}
      <main
        ref={heroRef}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-32 overflow-hidden"
      >
        {/* Globe — big, parallax on scroll, no initial animation to prevent flicker */}
        <motion.div
          className="w-full max-w-[520px] lg:max-w-[640px] xl:max-w-[720px] -mb-24 lg:-mb-32 relative"
          style={{
            y: globeY,
            scale: globeScale,
            opacity: hasLoaded ? globeOpacity : 0,
            transition: hasLoaded ? undefined : "opacity 1.5s ease",
          }}
        >
          <Globe scrollProgress={scrollProgress} />
        </motion.div>

        {/* Copy */}
        <div className="text-center relative z-10 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05] mb-5"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Your location,{" "}
            <em
              className="italic"
              style={{
                background:
                  "linear-gradient(135deg, #818cf8 0%, #a5b4fc 50%, #818cf8 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 6s ease-in-out infinite",
              }}
            >
              anywhere
            </em>
            <span className="text-[var(--color-accent-glow)]">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-base sm:text-lg text-[var(--color-text-muted)] font-light leading-relaxed mb-10 max-w-md mx-auto"
          >
            Spoof your iPhone&apos;s GPS from your Mac.
            <br />
            No jailbreak required. Free and open source.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={DOWNLOAD_URL}
              className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-[14px] font-medium text-white transition-all duration-300"
            >
              {/* Button gradient fill */}
              <span
                className="absolute inset-0 rounded-full opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #6366f1 100%)",
                }}
              />
              {/* Hover glow */}
              <span
                className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, #818cf8 0%, #6366f1 50%, #818cf8 100%)",
                  filter: "blur(16px)",
                }}
              />
              <span className="relative flex items-center gap-2.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download for Mac
              </span>
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-[14px] font-medium text-[var(--color-text-muted)] border border-[var(--color-border)] hover:text-[var(--color-text)] hover:border-[rgba(255,255,255,0.15)] transition-all duration-300 backdrop-blur-sm"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </motion.div>
        </div>
      </main>

      {/* Features */}
      <Features />

      {/* Footer */}
      <footer className="relative z-10 px-6 pb-12">
        <div className="max-w-5xl mx-auto flex items-center justify-between text-[12px] text-[var(--color-text-muted)]">
          <span>
            GPL v3 &middot; Free and open source &middot;{" "}
            <a
              href="https://elliotpadfield.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-text)] transition-colors duration-300"
            >
              Elliot Padfield
            </a>
          </span>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-text)] transition-colors duration-300"
          >
            GitHub
          </a>
        </div>
      </footer>
    </>
  );
}
