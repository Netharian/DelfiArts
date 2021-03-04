import styles from '../styles/pages/Navbar.module.css';

export function Navbar() {


    return (
        <div className={styles.navbarContainer}>
            <div><a href="/contact"><strong>CONTACT</strong></a></div>
            <div><a href="/"><img src="delfi logo transparente.png" alt="logo" /></a></div>
            <div><a href="/aboutme"><strong>ABOUT ME</strong></a></div>
        </div>
    );
}