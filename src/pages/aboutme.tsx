import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import styles from '../styles/pages/AboutMe.module.css';

export default function AboutMe() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Delfi Arts | About Me</title>
            </Head>
            <main>
                <Navbar />
                <div className="text-justify md:text-2xl md:w-9/12 mx-auto">
                    <p className="mb-5 mt-10">
                        Maria Rezende, aka Delfi, is a brazilian artist and writer born on October 16, 1995.
                    </p>
                    <div className="grid md:grid-cols-3 md:gap-11 mb-5">
                        <p className="md:col-span-2">
                            She started drawing because she wanted to play with characters from the movies and cartoons she watched, as well as the ones from her imagination.
                            Paper dolls were her favorite toys at the time, drawn by her mother until she learned to pick up a pencil herself. Writing came later in her life, in the
                            form of Harry Potter fanfiction and roleplaying forums.
                        </p>
                        <img className="md:grid-span-1  md:max-w-full" src="aboutme1.jpg" alt="imagem1" />
                    </div>

                    <p className="mb-5">
                        Later on, Maria started a major in Theatre and moved to Buenos Aires for an exchange program of 6 months.
                        By the time the semester ended, she had decided to stay in Argentina, and enrolled in a visual arts program at the
                        Universidad Nacional de las Artes (from which she never graduated either).
                    </p>

                    <div className="grid md:grid-cols-3 md:gap-8 mb-5">
                        <img className="max-w-full m-auto" src="aboutme2.jpg" alt="imagem2" />
                        <div className="md:col-span-2"><p>She returned to Salvador in 2018 with
                        a newly acquired tattoo machine, and has been tattooing ever since (herself, as well as other people).</p>
                            <br className="mt-5"></br>
                            <p>In 2020, covid-19 happened and in a way it brought digital art back into her life.</p>
                        </div>



                    </div>
                    <p>Maria had started doing art
                    commissions while in college (doing both digital art and watercolors), and returning to it by necessity also
                            helped reignite her passion for illustration and character design.</p>
                    <div className="grid md:grid-cols-3 md:gap-8 my-5">
                        <p className="md:col-span-2 mb-5">
                            Throughout 2020 Maria produced over 150 artworks and studies, started a Patreon page, and began the production
                            of her first comic, <strong>Nine Siblings of Hell</strong>, published through Webtoon Canvas.
                            When she's not working on her comic, drawing commissions, tattooing or making self indulgent illustrations and
                            posting it on social media, Maria watches shows from her childhood and pets her sister's cats.

                        </p>
                        <img src="aboutme3.jpg" alt="imagem3" />
                    </div>



                </div>
            </main>



        </div>
    );
}