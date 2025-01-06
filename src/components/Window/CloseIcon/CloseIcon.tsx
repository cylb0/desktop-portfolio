import styles from './CloseIcon.module.css';

interface CloseIconProps {
    onClick: () => void;
}

const CloseIcon: React.FC<CloseIconProps> = ({ onClick }) => {
    return (
        <button className={styles.icon} onClick={onClick}></button>
    )
}

export default CloseIcon;