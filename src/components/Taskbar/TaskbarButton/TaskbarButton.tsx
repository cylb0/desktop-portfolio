import React, { ReactNode } from 'react';
import styles from './TaskbarButton.module.css';

interface TasbkarButtonProps {
    icon: ReactNode;
    onClick: () => void;
}

const TaskbarButton: React.FC<TasbkarButtonProps> = ({ icon, onClick }) => {
    const handleTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
        const element = e.currentTarget;
        element.classList.add(styles.active);
    }

    const handleTouchEnd = (e: React.TouchEvent<HTMLButtonElement>) => {
        const element = e.currentTarget;
        element.classList.remove(styles.active);
    }
    return (
        <button
            className={styles.taskbarButton}
            onClick={onClick}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {icon}
        </button>
    );
};

export default TaskbarButton;