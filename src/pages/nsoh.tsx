import Head from 'next/head';
import React from 'react';
import { Navbar } from '../components/Navbar';
import styles from '../styles/pages/Nsoh.module.css'

export default function Nsoh() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Delfi Arts | NSOH</title>
            </Head>
            <main>
                <Navbar />


                <img
                    className="my-8"
                    src="/banner.png"
                    alt="NSOH Banner"
                />

                <div className="max-w-3/4 mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-center text-2xl">ENGLISH</h2>
                        <a href="https://www.webtoons.com/en/challenge/nine-siblings-of-hell/list?title_no=623420">
                            <img className="w-1/2 mx-auto my-4" src="/webtoon-logo.png" alt="webtoon website" />
                        </a>
                        <a href="https://tapas.io/series/NSOH">
                            <img className="w-1/2 mx-auto" src="/tapas-logo.png" alt="tapas website" />
                        </a>
                    </div>

                    <div className="content-center">
                        <h2 className="text-center text-2xl">PORTUGUÊS (BR)</h2>
                        <a href="https://www.webtoons.com/en/challenge/nove-irmãos-do-inferno-pt-br/list?title_no=623428">
                            <img className="w-1/2 mx-auto my-4" src="/webtoon-logo.png" alt="webtoon website" />
                        </a>

                    </div>
                </div>
            </main>
        </div>



    );
}