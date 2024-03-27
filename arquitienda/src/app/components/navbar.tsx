import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <Link href="/user" legacyBehavior passHref>
              <a className={styles.navbarLink}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Image
                    src="/images/perfil.png"
                    alt="Logo"
                    width={50}
                    height={50}
                    className={styles.logo}
                  />
                  Usuario
                </div>
              </a>
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/personal" legacyBehavior passHref>
              <a className={styles.navbarLink}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Image
                    src="/images/empleo.png"
                    alt="Logo"
                    width={50}
                    height={50}
                    className={styles.logo}
                  />
                  Empleados
                </div>
              </a>
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/Home" legacyBehavior passHref>
              <a className={styles.navbarLink}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Image
                    src="/images/casa.png"
                    alt="Logo"
                    width={50}
                    height={50}
                    className={styles.logo}
                  />
                  Página Principal
                </div>
              </a>
            </Link>
          </li>
          <li className={styles.navbarItem}>
          <Link href="/" legacyBehavior passHref>
              <a className={styles.navbarLink}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Image
                    src="/images/poder.png"
                    alt="Logo"
                    width={50}
                    height={50}
                    className={styles.logo}
                  />
                  Cerrar Sesión
                </div>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
