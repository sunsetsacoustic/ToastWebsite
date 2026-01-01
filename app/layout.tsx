import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://toastmobile.bar"),
  title: {
    default: "TOAST Mobile Bar Co. | Premier Dry Hire Bartending in Texas",
    template: "%s | TOAST Mobile Bar Co.",
  },
  description: "Luxury mobile bar and bartending service for weddings, corporate events, and parties. We bring the bar to you with custom cocktails and premium service.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "TOAST Mobile Bar Co.",
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
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
