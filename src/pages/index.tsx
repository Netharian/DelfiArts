import Head from 'next/head'
import { Commission } from '../components/Commission';
import { Social } from '../components/Social';
import { Navbar } from '../components/Navbar';

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
        <Navbar />
        <Social />
        <div className={styles.midimg}>
          <a href="/nsoh"><img className="md:w-3/4 mx-auto my-4 h" src="NSOH.gif" alt="Nine Sibling of Hell" /></a>
        </div>
        <Commission />

      </main>



    </div>
  )
}
