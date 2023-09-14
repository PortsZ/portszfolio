import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JP Portes",
  description: "Welcome to my personal website!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-white">{children}</body>
    </html>
  );
}
