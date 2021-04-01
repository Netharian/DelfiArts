import Head from 'next/head'
import { Navbar } from '../components/Navbar';


import styles from '../styles/pages/CommissionMe.module.css';

export default function Contact() {






    return (
        <div className={styles.container}>
            <Head>
                <title>Delfi Arts | Commission</title>
            </Head>
            <main>
                <Navbar />



                <form
                    method="POST"
                    action="https://formspree.io/f/mgepgzjd"

                    className="antialiased flex flex-col my-8 rounded-xl shadow-lg p-8 space-y-4 w-9/12 mx-auto"
                >
                    <div>
                        <label htmlFor="name" className="text-sm">Name:</label>
                        <input

                            type="text"
                            placeholder="Your Name"
                            name="name"
                            className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="text-sm">Email:</label>
                        <input

                            type="email"
                            placeholder="Your Email"
                            name="email"
                            className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="text-sm">Your message:</label>
                        <textarea

                            rows={4}
                            placeholder="Your Message"
                            name="message"
                            className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2"
                        />
                    </div>

                    <button
                        onSubmit={(e) => e.preventDefault()}
                        type="submit"
                        className="inline-block self-center bg-blue-600 text-white font-bold rounded-lg px-6 py-2 uppercase hover:bg-pink-600">Send</button>
                </form>

            </main>
        </div>
    );

}