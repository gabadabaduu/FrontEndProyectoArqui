"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css'; // Asegúrate de crear este archivo CSS basado en tu CSS existente

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" legacyBehavior>
          <a className={styles.logo}>Bootom Line</a>
        </Link>
        <div className={styles.mobileMenu} onClick={toggleMenu}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <ul className={`${styles.navList} ${isActive ? styles.active : ''}`}>
          <li><Link href="#" legacyBehavior><a>Início</a></Link></li>
          <li><Link href="#" legacyBehavior><a>Sobre Nostros</a></Link></li>
          <li><Link href="#" legacyBehavior><a>Projectos</a></Link></li>
          <li><Link href="/login" legacyBehavior><a>Inicio sesión</a></Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

