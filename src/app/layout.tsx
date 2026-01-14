import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tate Donohoe",
    template: "%s · Tate Donohoe",
  },
  description:
    "Experiments, software, and systems. If you want to disrupt, start here.",
  authors: [{ name: "Tate Donohoe" }],
  creator: "Tate Donohoe",
  metadataBase: new URL("https://tatedonohoe.au"),
  openGraph: {
    title: "tatedonohoe",
    description:
      "Quiet experiments, software, and systems. If you want to disrupt, start here.",
    url: "https://tatedonohoe.au",
    siteName: "Tate Donohoe",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f9f5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
