import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tom Børvan | E-Commerce Consultant & Project Lead",
  description: "Project Manager at Alpha Solutions Norge. 15+ years in tech, e-commerce consulting, and leading international teams. Based in Oslo, Norway.",
  keywords: ["Tom Børvan", "E-commerce", "Project Manager", "Consultant", "Shopify", "Oslo", "Norway", "Alpha Solutions"],
  authors: [{ name: "Tom Børvan" }],
  openGraph: {
    title: "Tom Børvan | E-Commerce Consultant & Project Lead",
    description: "Project Manager at Alpha Solutions Norge. 15+ years in tech, e-commerce consulting, and leading international teams.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tom Børvan | E-Commerce Consultant & Project Lead",
    description: "Project Manager at Alpha Solutions Norge. 15+ years in tech, e-commerce consulting, and leading international teams.",
    creator: "@TomBorvan",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
