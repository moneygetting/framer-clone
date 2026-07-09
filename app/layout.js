import { Silkscreen, Questrial, Raleway } from "next/font/google";
import "./globals.css";

const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-silkscreen",
});

const questrial = Questrial({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-questrial",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-raleway",
});

export const metadata = {
  title: "My Framer Site",
  description: "Made with Framer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${silkscreen.variable} ${questrial.variable} ${raleway.variable} font-body bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
