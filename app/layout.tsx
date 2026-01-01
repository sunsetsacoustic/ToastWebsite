import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.toastmobile.bar"),
  alternates: {
    canonical: "./",
  },
  title: {
    default: "TOAST Mobile Bar | Kingwood's Dry Hire Service",
    template: "%s | TOAST Mobile Bar",
  },
  description: "Luxury mobile bar and bartending service for weddings, corporate events, and parties. We bring the bar to you with custom cocktails and premium service.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "TOAST Mobile Bar Co.",
    url: "https://toastmobile.bar",
    images: [
      {
        url: "/images/toast_mini_hero_luxury.png",
        width: 1200,
        height: 630,
        alt: "TOAST Mobile Bar Co. Luxury Setup",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <GoogleAnalytics />
        <JsonLd />
        {children}
        <Footer />
      </body>
    </html>
  );
}
