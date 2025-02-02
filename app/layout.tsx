import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { fontSans } from "@/config/fonts";
import clsx from "clsx";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Отчеты",
  description: "Отчеты",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange >

        <Navbar/>

        <main className="container mx-auto max-w-7xl mt-7">
          {children}
        </main>

        <footer className="w-full flex items-center justify-center py-3">
          <Link
            // isExternal
            className="flex items-center gap-1 text-current"
            href="/"
            title="Отчеты"
          >
            <span className="text-default-600">Обновлено:</span>
            <p className="text-primary">11.01.2025 г.</p>
          </Link>
        </footer>

      </ThemeProvider>
        
      </body>
    </html>
  );
}
