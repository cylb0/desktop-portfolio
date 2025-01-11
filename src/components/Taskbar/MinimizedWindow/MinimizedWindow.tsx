import styles from './MinimizedWindow.module.css';

interface MinimizedWindowProps {
    src: string;
    alt: string;
    onClick: () => void;
}

const MinimizedWindow: React.FC<MinimizedWindowProps> = ({ src, alt, onClick }) => {
    return (
        <div
            className={styles.container}
            onClick={onClick}
        >
            <img
                className={styles.icon}
                src={src}
                alt={alt} />
        </div>
    );
};

export default MinimizedWindow;
