import { useWindowContext } from '../../../contexts/WindowContext';
import styles from './NavButton.module.css';

interface NavButtonProps {
    id: string;
    src: string;
    alt: string;
    label: string;
}

const NavButton: React.FC<NavButtonProps> = ({ id, src, alt, label }) => {
    const { openWindow } = useWindowContext();

    return (
        <button className={styles.navButton} onClick={() => openWindow(id)}>
            <img className={styles.icon} src={src} alt={alt} />
            <span className={styles.label}>{label}</span>
        </button>
    )
}

export default NavButton;