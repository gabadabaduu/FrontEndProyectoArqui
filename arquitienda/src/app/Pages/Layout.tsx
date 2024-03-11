import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <main>
        <nav>Navegación de las categorías</nav>
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
        {children}
      </main>
    )
  }