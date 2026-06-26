import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Main Street Grocery, Deli & Pastry — Orange, NJ",
  description:
    "Grocery, deli and bakery under one roof on Main Street, City of Orange. Open early, open late, seven days a week. 58 Main St.",
  openGraph: {
    title: "Main Street Grocery, Deli & Pastry — Orange, NJ",
    description: "Your whole list, one stop on Main St. Grocery · Deli · Pastry.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf4e8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts self-hosted from /public/fonts (see globals.css @font-face). No CDN dependency. */}
        <link rel="preload" href="/fonts/tanker-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/general-sans-600.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
