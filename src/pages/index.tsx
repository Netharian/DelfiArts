import Head from 'next/head'
import { Commission } from '../components/Commission';
import { Navbar } from '../components/Navbar';
import { Title } from '../components/Title';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Delfi Arts | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=RocknRoll+One&family=Teko:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <Title />
        <Navbar />
        <div className={styles.midimg}>
          <img src="imagem do meio.jpg" alt="Nine Sibling of Hell" />
        </div>
        <Commission />

      </main>



    </div>
  )
}
