import type { Metadata } from "next";
import {Poppins} from "next/font/google"
import "./globals.css";

const poppins = Poppins({weight: ['500', '600', '700', '800'], subsets: ["latin", "latin-ext"]})

export const metadata: Metadata = {
  title: "Check Khodam",
  description: "Check Khodam next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
