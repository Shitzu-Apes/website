import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbars";
import Banner from "@/components/Banner";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SHITZU - 576,167,000",
  description: "Embrace the Meme, Join the Movement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <Navbar />
        <Banner />
        {children}
      </body>
    </html>
  );
}
