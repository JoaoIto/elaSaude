import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavbarDrawer } from "./components/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "elaSaude",
  description: "App de cuidados para a mulher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${geistSans.variable} ${geistMono.variable} antialiased`} lang="en">
      <body
        className="w-screen h-screen bg-lightGray"
      >
        <NavbarDrawer />
        {children}
      </body>
    </html>
  );
}
