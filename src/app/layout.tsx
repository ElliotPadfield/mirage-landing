import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mirage — Your location, anywhere.",
  description:
    "Spoof your iPhone's GPS from your Mac. No jailbreak required. Free and open source.",
  openGraph: {
    title: "Mirage — Your location, anywhere.",
    description:
      "Spoof your iPhone's GPS from your Mac. No jailbreak required.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
