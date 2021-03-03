import styles from '../styles/pages/Title.module.css';

export function Title() {
    return (
        <div className={styles.titleContainer}>
            <a href="/"><span>CONTACT</span></a>
            <img src="delfi logo transparente.png" alt="logo" />
            <a href="/"><span>ABOUT ME</span></a>
        </div>
    );
}