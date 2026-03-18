import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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

const defaultTitle = "ZEPHYROS | グローバルリーダーシップ・ビジネス英語研修";
const defaultDescription = "41万人の実績。世界と戦うリーダーを育成する実践型グローバル研修プログラム。";

export const metadata: Metadata = {
  title: {
    default: defaultTitle,
    template: "%s | ZEPHYROS",
  },
  description: defaultDescription,
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: "https://zephyros.jp",
    siteName: "ZEPHYROS",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "https://zephyros.jp/images/ogp.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["https://zephyros.jp/images/ogp.png"],
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
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
