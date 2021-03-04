import styles from '../styles/pages/Commission.module.css';

export function Commission() {
    return (
        <div className={styles.commissionContainer}>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdVxzYCRSvGRxW2yV4VN583MWfyXS6cPZjArblzJS3j8LHDIg/viewform" target="_blank" rel="noopener noreferrer">
                <img src="dupla.jpg" alt="duplinha dinamica" />
                <span> COMMISSION ME </span></a>
        </div>
    );
}