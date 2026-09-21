import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Manrope, Caveat } from "next/font/google";
import { siteInfo } from "@/lib/content";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

// Acento cálido y manuscrito para el hashtag #AcciónDeCorazón, coherente
// con el trazo de marcador que la Fundación usa en sus piezas de redes.
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteInfo.url),
  title: {
    default: `${siteInfo.name} | ${siteInfo.concept}`,
    template: `%s | ${siteInfo.name}`,
  },
  description: siteInfo.seoDescription,
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteInfo.url,
    siteName: siteInfo.name,
    title: `${siteInfo.name} | ${siteInfo.concept}`,
    description: siteInfo.seoDescription,
    images: [
      {
        url: "/images/hero/hero-main.svg",
        width: 1200,
        height: 1500,
        alt: siteInfo.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteInfo.name} | ${siteInfo.concept}`,
    description: siteInfo.seoDescription,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${manrope.variable} ${caveat.variable} antialiased`}>
      <body className="min-h-full flex flex-col bg-fme-white text-fme-ink font-sans">
        {children}
      </body>
    </html>
  );
}
