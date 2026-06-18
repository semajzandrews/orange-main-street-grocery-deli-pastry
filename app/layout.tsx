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
        {/* Fontshare — Tanker (heavy bodega-signage display) + General Sans (body). Distinct from Sudzy. */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=tanker@400&f[]=general-sans@500,600,700&f[]=clash-grotesk@600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
