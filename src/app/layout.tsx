import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://elliotpadfield.github.io/mirage-landing";
const TITLE = "Free iPhone GPS Location Changer for Mac | Mirage App";
const DESCRIPTION =
  "Change your iPhone's GPS location from your Mac with Mirage. No jailbreak or account required. Free and open source for Apple silicon Macs. Download now.";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elliotpadfield.github.io"),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Mirage",
  authors: [{ name: "Elliot Padfield", url: "https://elliotpadfield.com" }],
  creator: "Elliot Padfield",
  publisher: "Elliot Padfield",
  category: "Utilities",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/mirage-landing/manifest.webmanifest",
  icons: {
    icon: [
      {
        url: "/mirage-landing/brand/mirage-icon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/mirage-landing/brand/mirage-icon-128.png",
        sizes: "128x128",
        type: "image/png",
      },
    ],
    apple: "/mirage-landing/brand/mirage-icon-128.png",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: `${SITE_URL}/`,
    siteName: "Mirage",
    locale: "en_GB",
    images: [
      {
        url: "/mirage-landing/product/mirage-malibu.jpg",
        width: 1152,
        height: 768,
        alt: "Mirage for macOS changing an iPhone GPS location to Malibu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/mirage-landing/product/mirage-malibu.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakartaSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
