import { Pixelify_Sans, Questrial, Raleway } from "next/font/google";
import "./globals.css";

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pixelify-sans",
});

const questrial = Questrial({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-questrial",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-raleway",
});

export const metadata = {
  title: "Senzwelwe Case Study",
  description: "Case study clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${pixelifySans.variable} ${questrial.variable} ${raleway.variable} bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
