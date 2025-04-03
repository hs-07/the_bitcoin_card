import { Onest, Oxygen, Sofia_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});
const oxygen = Oxygen({
  weight: ["300", "400", "700"],
  variable: "--font-oxygen",
  subsets: ["latin"],
});
const sofia = Sofia_Sans({
  weight: ["400"],
  variable: "--font-sofia",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Bitcoin Card",
  description:
    "Secure everyday Credit Card Bitcoin—Stack More Bitcoin with Every Dollar Spent.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${onest.variable} ${oxygen.variable} ${sofia.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
