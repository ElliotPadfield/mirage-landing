import type { MetadataRoute } from "next";

const SITE_URL = "https://elliotpadfield.github.io/mirage-landing";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
