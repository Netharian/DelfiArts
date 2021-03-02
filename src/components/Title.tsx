import styles from '../styles/pages/Title.module.css';

export function Title() {
    return (
        <div className={styles.titleContainer}>
            <a href=""><span>CONTACT</span></a>
            <a href="/"><img src="delfi logo transparente.png" alt="logo" /></a>
            <a href=""><span>ABOUT ME</span></a>
        </div>
    );
}