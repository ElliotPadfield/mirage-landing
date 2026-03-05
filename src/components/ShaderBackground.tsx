"use client";

import { useEffect, useState } from "react";

export default function ShaderBackground() {
  const [ShaderComponent, setShaderComponent] = useState<React.ComponentType<
    Record<string, unknown>
  > | null>(null);

  useEffect(() => {
    // Only load the shader if WebGL is supported
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (!gl) return;

      import("@paper-design/shaders-react").then((mod) => {
        setShaderComponent(() => mod.NeuroNoise);
      });
    } catch {
      // WebGL not supported, skip shader
    }
  }, []);

  if (!ShaderComponent) {
    // Fallback: subtle CSS gradient
    return (
      <div
        className="fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, #0a0a1a 0%, #050507 70%)",
        }}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-0" style={{ opacity: 0.3 }}>
      <ShaderComponent
        style={{ width: "100%", height: "100%" }}
        colorBack="#050507"
        colorMid="#0a0a1a"
        colorFront="#1a1a3e"
        scale={1.5}
        speed={0.3}
        brightness={0.08}
        contrast={0.25}
      />
    </div>
  );
}
