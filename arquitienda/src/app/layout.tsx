import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from 'next/link';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BottomLine",
  description: "Crece y organizate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header>     
          <nav>
            <ul>
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/Analisis">
                <li>Analisis</li>
              </Link>
              <Link href="./Inventario">
                <li>Inventario</li>
              </Link>
              <Link href="./Nomina">
                <li>Nomina</li>
              </Link>
            </ul>
          </nav>
        </header>
        {children}
        </body>
    </html>
  );
}
