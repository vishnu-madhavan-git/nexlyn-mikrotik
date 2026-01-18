import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXLYN Distribution - Trusted MikroTik B2B Distributor",
  description: "NEXLYN Distribution is a trusted B2B distributor of MikroTik products, serving UAE, GCC, and export markets with reliable solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
