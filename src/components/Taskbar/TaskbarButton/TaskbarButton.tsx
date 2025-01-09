import { ReactNode } from 'react';
import styles from './TaskbarButton.module.css';

interface TasbkarButtonProps {
    icon: ReactNode;
    onClick: () => void;
}

const TaskbarButton: React.FC<TasbkarButtonProps> = ({ icon, onClick }) => {
    return (
        <button className={styles.taskbarButton} onClick={onClick}>
            {icon}
        </button>
    );
};

export default TaskbarButton;