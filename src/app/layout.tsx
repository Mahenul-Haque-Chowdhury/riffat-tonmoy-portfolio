import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BeamsBackground from "@/components/BeamsBackground";
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
  title: "Riffat Tonmoy",
  description: "Entrepreneur and car enthusiast — Crystal Valley",
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
        <BeamsBackground />
        <div className="app-enter">{children}</div>
      </body>
    </html>
  );
}
