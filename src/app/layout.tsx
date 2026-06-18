import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://consciousspaces.example.com"),
  title: {
    default: "Conscious Spaces — Interior Design Studio",
    template: "%s — Conscious Spaces",
  },
  description:
    "Conscious Spaces is an interior design studio for slow, real life. We design residential, hospitality, and wellness interiors built around light, material, and how people actually live.",
  keywords: [
    "interior design studio",
    "residential interior design",
    "minimalist interior design",
    "luxury interior design",
  ],
  openGraph: {
    title: "Conscious Spaces — Interior Design Studio",
    description:
      "An interior design studio for slow, real life — residential, hospitality, and wellness interiors built around light and material.",
    url: "https://consciousspaces.example.com",
    siteName: "Conscious Spaces",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conscious Spaces — Interior Design Studio",
    description:
      "An interior design studio for slow, real life — residential, hospitality, and wellness interiors built around light and material.",
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
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-ivory text-ink">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
