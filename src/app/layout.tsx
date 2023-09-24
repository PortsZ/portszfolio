import Navbar from "@/components/navigation/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/navigation/Footer";

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
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-background text-white">
      <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
