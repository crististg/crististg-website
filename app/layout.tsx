import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cristi — Portfolio",
  description: "Cristi's personal portfolio showcasing skills and projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
          {/* Accessible skip link for keyboard users */}
          <a className="skip-link" href="#content">Skip to content</a>
          <Header />
          <main id="content" className="mx-auto max-w-6xl px-6 py-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
