import Head from 'next/head'
import { Navbar } from '../components/Navbar';

import styles from '../styles/pages/CommissionMe.module.css';

export default function Commission() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Delfi Arts | Commission</title>
            </Head>
            <main>
                <Navbar />

            </main>
        </div>
    );

}