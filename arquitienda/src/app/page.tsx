import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const Home = () => {
  return (
    <main>
   <header>
          <nav>
            <ul className="link-container">
              <li>
                <Link href="register">Registrarse</Link>
              </li>
              <li>
                <Link href="login">Iniciar Sesión</Link>
              </li> 
              <li>
                <Link href="precios">Conoce nuestros precios</Link>
              </li> 
            </ul>
          </nav>
        </header>
        <body>
          
        </body>
    </main>
  );
};

export default Home;