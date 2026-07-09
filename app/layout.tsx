import type { Metadata } from "next";
import { Raleway, Questrial, Silkscreen } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700"],
});

const questrial = Questrial({
  subsets: ["latin"],
  variable: "--font-questrial",
  weight: ["400"],
});

const silkscreen = Silkscreen({
  subsets: ["latin"],
  variable: "--font-pixel",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "My Framer Site",
  description: "Made with Framer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${questrial.variable} ${silkscreen.variable} font-questrial bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
