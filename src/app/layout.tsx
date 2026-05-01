import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f766e",
};

export const metadata: Metadata = {
  title: "Meridian AI — Web Design, Local SEO & AI for Bellingham & Burlington Businesses",
  description:
    "Meridian AI LLC provides professional website design, local SEO, and AI agent deployment for businesses in Bellingham, WA and Burlington, WA. One vendor, full stack, built for local.",
  keywords: [
    "web design Bellingham WA",
    "local SEO Burlington WA",
    "AI agent deployment",
    "small business website",
    "Google Business Profile",
    "OpenClaw AI",
    "Hermes AI",
  ],
  authors: [{ name: "Meridian AI LLC" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Meridian AI — Web Design, Local SEO & AI for Bellingham & Burlington",
    description:
      "Professional website design, local SEO, and AI agent deployment for businesses in Bellingham, WA and Burlington, WA.",
    siteName: "Meridian AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meridian AI — Web Design, Local SEO & AI",
    description: "One vendor, full stack, built for local businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}