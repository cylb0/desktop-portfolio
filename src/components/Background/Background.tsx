import styles from './Background.module.css';

interface BackgroundProps {
    src: string;
    alt: string;
    isBlured: boolean;
    isSpinning: boolean;
}

const Background: React.FC<BackgroundProps> = ({ src, alt = "background", isBlured, isSpinning }) => {
    return (
        <div className={styles.backgroundWrapper}>
            <img 
                src={src}
                alt={alt}
                className={`${styles.background} ${isSpinning ? styles.spinning : ''}`}
            />
            {isBlured && <div className={styles.whiteBlurOverlay}></div>}
        </div>
    )
}

export default Background;