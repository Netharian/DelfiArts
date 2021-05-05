import Head from 'next/head'
import { Commission } from '../components/Commission';
import { Social } from '../components/Social';
import { Navbar } from '../components/Navbar';
import Link from 'next/link'

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
        <div className="grid md:grid-flow-col gap-8 justify-between my-8">

          <Link href="https://ko-fi.com/s/fad3400687"><a href="https://ko-fi.com/s/fad3400687"><img className={`${styles.mermayImg}`} src="Ariel Mermay 4.png" alt="Mermay 2021" /></a></Link>



          <Link href="/nsoh"><a href=""><img className={styles.bannerImg} src="BAnner small.png" alt="Banner NSOH Small" /></a></Link>


        </div>
        <Commission />

      </main>



    </div>
  )
}
