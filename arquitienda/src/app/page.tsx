import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

interface BoxProps {
  title: string;
  content: string;
}

const Boxa = ({ title, content }: BoxProps) => {

  return (
    <div className={styles.boxa}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

const Boxb = ({ title, content }: BoxProps) => {

  return (
    <div className={styles.boxb}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};
const Box = ({ title, content }: BoxProps) => {

  return (
    <div className={styles.box}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

const Home = () => {
  return (
    <main>
   <h1>hola</h1>
    </main>
  );
};

export default Home;