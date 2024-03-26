import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';


const Home = () => {
  return (
    <main>
   <h1>hola</h1>
   <header>
          <nav>
            <ul className="link-container">
              <li>
                <Link href="register">Registrarse</Link>
              </li>
              <li>
                <Link href="login">Iniciar Sesión</Link>
              </li> 
            </ul>
          </nav>
        </header>
    </main>
  );
};

export default Home;