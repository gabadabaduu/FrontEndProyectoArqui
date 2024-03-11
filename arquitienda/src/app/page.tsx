import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>hola</h1>
      <nav>
            <ul>

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
  
    </main>
  );
}
