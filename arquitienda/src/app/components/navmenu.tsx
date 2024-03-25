import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css'; 

const Navmenu: React.FC = () => {
  return (
    <header>
          <nav>
            <ul className="link-container">
              <li>
                <Link href="Home">Home</Link>
              </li>
              <li>
                <Link href="analysis">Analisis</Link>
              </li>
              <li>
                <Link href="inventary">Inventario</Link>
              </li>
              <li>
                <Link href="nomina">Nomina</Link>
              </li>
              <li>
                <Link href="register">Register</Link>
              </li>
            </ul>
          </nav>
        </header>
  );
};

export default Navmenu;
