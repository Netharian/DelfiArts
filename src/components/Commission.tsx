import styles from '../styles/pages/Commission.module.css';

export function Commission() {
    return (
        <div className={styles.commissionContainer}>
            <a href="/commissionme"><img src="dupla.jpg" alt="duplinha dinamica" />
                <span> COMMISSION ME </span></a>
        </div>
    );
}