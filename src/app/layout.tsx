import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbars";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

import FavIcon from "@/assets/favicon.ico";
import OGImage from "@/assets/og.webp";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.METADATABASE!),
  title: "SHITZU - 576,167,000",
  description:
    "Being born on April Fool's, $SHITZU keeps it foolishly simple: 576,167,000 tokens, period. All circulating, no lock-ups, no vesting.",
  keywords: [
    "crypto",
    "web3",
    "blockchain",
    "meme",
    "token",
    "coin",
    "erc-20",
    "near",
    "aurora",
  ],
  icons: {
    icon: FavIcon.src,
  },
  appleWebApp: {
    title: "SHITZU",
    statusBarStyle: "black",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shitzuapes.xyz/",
    images: [
      {
        url: OGImage.src,
        width: 1920,
        height: 1080,
        alt: "SHITZU",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@shitzucommunity",
    images: [
      {
        url: OGImage.src,
        alt: "SHITZU",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-domain="shitzuapes.xyz"
          src="https://plausible.io/js/script.js"
        ></script>
        <meta
          name="google-site-verification"
          content="FmRJiRE0VYmRc-BJ9CQL1B6r8TCiDv7ouhGRah7AfKc"
        />
      </head>
      <body className={`${inter.className} bg-black`}>
        <Navbar />
        <Banner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
