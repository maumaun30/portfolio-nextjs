import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maurico Maun - Portfolio",
  description: "My portfolio",
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head></head>
      <body className="dark:bg-gray-900 dark:text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
