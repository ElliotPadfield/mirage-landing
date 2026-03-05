"use client";

import { useEffect, useRef, useState } from "react";

interface GlobeProps {
  scrollProgress?: number;
}

export default function Globe({ scrollProgress = 0 }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(0);
  const scrollRef = useRef(scrollProgress);
  const [ready, setReady] = useState(false);

  // Keep scroll ref in sync without triggering re-renders
  scrollRef.current = scrollProgress;

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    // Check WebGL support
    try {
      const gl = canvas.getContext("webgl") || canvas.getContext("webgl2");
      if (!gl) return;
    } catch {
      return;
    }

    let width = canvas.offsetWidth;
    let globe: ReturnType<typeof import("cobe").default> | null = null;

    import("cobe").then((cobe) => {
      if (!canvasRef.current) return;

      globe = cobe.default(canvas, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta: 0.25,
        dark: 1,
        diffuse: 1.8,
        mapSamples: 24000,
        mapBrightness: 2.4,
        baseColor: [0.15, 0.15, 0.2],
        markerColor: [0.39, 0.4, 0.95],
        glowColor: [0.12, 0.12, 0.2],
        markers: [
          { location: [51.5074, -0.1278], size: 0.06 },
          { location: [40.7128, -74.006], size: 0.06 },
          { location: [35.6762, 139.6503], size: 0.06 },
          { location: [-33.8688, 151.2093], size: 0.06 },
          { location: [48.8566, 2.3522], size: 0.06 },
          { location: [1.3521, 103.8198], size: 0.05 },
          { location: [-22.9068, -43.1729], size: 0.05 },
          { location: [55.7558, 37.6173], size: 0.05 },
          { location: [25.2048, 55.2708], size: 0.05 },
        ],
        onRender: (state) => {
          state.width = width * 2;
          state.height = width * 2;
          if (!pointerInteracting.current) {
            phiRef.current += 0.003;
          }
          state.phi =
            phiRef.current + pointerInteractionMovement.current / 200;
          state.theta = 0.25 + scrollRef.current * 0.4;
        },
      });

      setReady(true);
    });

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);

    return () => {
      globe?.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []); // Empty deps — globe created once, reads refs for dynamic values

  return (
    <div
      className="relative aspect-square w-full mx-auto select-none"
      style={{ userSelect: "none" }}
    >
      {/* Glow behind globe */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0.05) 40%, transparent 70%)",
          filter: "blur(60px)",
          transform: "scale(1.4)",
        }}
      />
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          opacity: ready ? 1 : 0,
          transition: "opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
          contain: "layout paint size",
          cursor: "grab",
        }}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          canvasRef.current!.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
          }
        }}
      />
    </div>
  );
}
