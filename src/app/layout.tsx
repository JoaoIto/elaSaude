"use client";
import "./globals.css";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { checkPublicRoute } from "./functions/routes/checkPublicRoute";
import PrivateRoute from "./routes";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isPublicPage = checkPublicRoute(pathname);

  return (
    <html
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      lang="en"
    >
      <body className="w-screen h-screen bg-lightGray">
        {isPublicPage && (
          <>
            <NavbarDrawer />
            {children}
          </>
        )}
        {!isPublicPage && (
          <PrivateRoute>
            <NavbarDrawer />
            {children}
          </PrivateRoute>
        )}
      </body>
    </html>
  );
}
