import { useWindowContext } from '../../../contexts/WindowContext';
import CloseIcon from '../CloseIcon/CloseIcon';
import styles from './TitleBar.module.css';

interface TitleBarProps {
    id: string;
}

const TitleBar: React.FC<TitleBarProps> = ({ id }) => {
    const { windows, toggleWindow } = useWindowContext();
    const windowData = windows.find((window) => window.id === id);

    if (!windowData) {
        console.error(`Window data with id "${id}" not found.`)
        return null;
    }

    return (
        <div className={styles.titleBar}>
            <h1 className={styles.title}>{windowData.label}</h1>
            <CloseIcon onClick={() => toggleWindow(id)} />
        </div>
    )
}

export default TitleBar;