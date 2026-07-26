import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mirage",
    short_name: "Mirage",
    description:
      "A free, open-source iPhone GPS location changer for Apple silicon Macs.",
    start_url: "/mirage-landing/",
    display: "standalone",
    background_color: "#f8fbfa",
    theme_color: "#1859ff",
    icons: [
      {
        src: "/mirage-landing/brand/mirage-icon-128.png",
        sizes: "128x128",
        type: "image/png",
      },
    ],
  };
}
