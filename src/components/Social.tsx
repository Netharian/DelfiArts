import styles from '../styles/components/Social.module.css';

export function Social() {
    return (
        <div className={styles.socialContainer}>
            <a href="https://www.patreon.com/delfiarts/posts" target="_blank" rel="noopener noreferrer">
                <div className={styles.patreon}>
                    <img src="nana.jpg" alt="patreon" />
                    <span>PATREON</span>
                </div>
            </a>

            <div className={styles.webtoon}>
                <img src="charlie.jpg" alt="webtoon" />
                <span>WEBTOON</span>
            </div>
            <a href="https://www.instagram.com/delfi_arts/" target="_blank" rel="noopener noreferrer">
                <div className={styles.instagram}>
                    <img src="loira.jpg" alt="instagram" />
                    <span>INSTAGRAM</span>
                </div>
            </a>
            <a href="https://www.artstation.com/delfi" target="_blank" rel="noopener noreferrer">
                <div className={styles.artstation}>
                    <img src="lilith.jpg" alt="artstation" />
                    <span>ARTSTATION</span>
                </div>
            </a>





        </div>
    );
}