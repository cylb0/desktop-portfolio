import { ReactNode } from 'react';
import TitleBar from './TitleBar/TitleBar';
import styles from './Window.module.css';
import { useWindowContext } from '../../contexts/WindowContext';

interface WindowProps {
    id: string;
    children: ReactNode;
}

const Window: React.FC<WindowProps> = ({ id, children }) => {
    const { windows, selectActiveWindow } = useWindowContext();
    const windowData = windows.find((window) => window.id === id);
    if (!windowData || !windowData.position) return null; 
    const activeZIndex = Math.max(...windows.map((window) => window.zIndex));
    const isActive = windowData.zIndex === activeZIndex;

    return (
        <div
            className={`${styles.window} ${isActive ? styles.active : ''}`}
            style={{
                top: `${windowData.position.y}px`,
                left: `${windowData.position.x}px`,
                zIndex: windowData.zIndex,
            }}
            onClick={() => selectActiveWindow(id)}
        >
            <TitleBar id={id} />
            <div className={styles.content}>{children}</div>
        </div>
    )
}

export default Window;