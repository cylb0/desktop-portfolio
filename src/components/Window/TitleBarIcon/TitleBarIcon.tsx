import { ReactNode } from 'react';
import styles from './TitlebarIcon.module.css';

interface TitleBarIconProps {
    icon: ReactNode;
    onClick: () => void;
}

const TitleBarIcon: React.FC<TitleBarIconProps> = ({ icon, onClick }) => {
    return (
        <button
            className={styles.icon}
            onClick={onClick}
        >
            {icon}
        </button>
    )
}

export default TitleBarIcon;