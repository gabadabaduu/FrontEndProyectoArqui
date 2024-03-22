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
      <div className={styles.container}>
        <Box title="Analysis" content="Content of Analysis page goes here." />
        <Box title="Inventory" content="Content of Inventory page goes here." />
        <Box title="Nomina" content="Content of Nomina page goes here." />
      </div>
    </main>
  );
};

export default Home;