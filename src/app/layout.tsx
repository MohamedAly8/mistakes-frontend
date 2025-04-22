import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-neue-haas",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-neue-haas",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mistakes",
  description: "Learn from the mistakes of others.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-display antialiased`}>{children}</body>
    </html>
  );
}
