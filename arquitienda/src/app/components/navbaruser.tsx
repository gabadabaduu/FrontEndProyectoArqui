"use client";

import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image"; // Importa la etiqueta Image de Next.js

const Navbar: React.FC = () => {
    return (
        <div>
            <nav className={styles.navbar}>
                <center>
                    <Image src="/marcela.png" alt="Usuario" width={200} height={250} />
                </center>
                <ul className={styles.navbarList}>
                    <li className={styles.navbarItem}>
                        <Link href="/user" legacyBehavior>
                            <a className={styles.navbarLink}>Usuario</a>
                        </Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link href="/personal" legacyBehavior>
                            <a className={styles.navbarLink}>Empleados</a>
                        </Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link href="/Home" legacyBehavior>
                            <a className={styles.navbarLink}>Página Principal</a>
                        </Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link href="/" legacyBehavior>
                            <a className={styles.navbarLink}>Cerrar Sesión</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;