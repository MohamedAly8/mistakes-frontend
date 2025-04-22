import type { Metadata } from "next";
import "./globals.css";

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
