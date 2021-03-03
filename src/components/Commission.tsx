import styles from '../styles/pages/Commission.module.css';

export function Commission() {
    return (
        <div className={styles.commissionContainer}>
            <img src="dupla.jpg" alt="duplinha dinamica" />
            <a href="/commission"><span> COMISSION ME </span></a>
        </div>
    );
}