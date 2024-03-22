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
      <div className="vertical-bar">
      <li>
                <Link href="paypal">
                  Facturación
                </Link>
              </li>
              <li>
                <Link href="user">
                  Usuario
                </Link>
              </li>
              <li>
                <Link href="plans">
                  Tienda de planes
                </Link>
              </li>
      </div>
        <header>
          <nav>
            <ul className="link-container">
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="analysis">
                  Analisis
                </Link>
              </li>
              <li>
                <Link href="inventary">
                  Inventario
                </Link>
              </li>
              <li>
                <Link href="nomina">
                  Nomina
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
