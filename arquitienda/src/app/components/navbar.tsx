import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css'; 

const Navbar: React.FC = () => {
  return (
    <div>
    <nav className={styles.navbar}>
      <br />
      <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link href="/user">
            <li className={styles.navbarLink}>Usuario</li>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/personal">
            <li className={styles.navbarLink}>Empleados</li>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/Home">
            <li className={styles.navbarLink}>Página Principal</li>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/">
            <li className={styles.navbarLink}>Cerrar Sesión</li>
          </Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
