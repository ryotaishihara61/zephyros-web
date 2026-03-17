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
  title: {
    default: "ZEPHYROS | 50年の実績、世界を動かすグローバル研修",
    template: "%s | ZEPHYROS",
  },
  description:
    "創業50年、受講者累計41万人。単なる英語教育ではなく、文化の壁を越え人を動かすためのグローバル・コミュニケーションとリーダーシップを教える ZEPHYROS。トヨタ、アマゾンなど世界の大手企業に選ばれる研修プロフェッショナルです。",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    siteName: "ZEPHYROS",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
