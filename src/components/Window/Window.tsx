import { CSSProperties, ReactNode } from 'react';
import TitleBar from './TitleBar/TitleBar';
import styles from './Window.module.css';
import { useWindowContext } from '../../contexts/WindowContext';

interface WindowProps {
    id: string;
    children: ReactNode;
    style?: CSSProperties;
}

const Window: React.FC<WindowProps> = ({ id, children, style }) => {
    const { selectActiveWindow } = useWindowContext();

    return (
        <div
            className={styles.window}
            style={style}
            onClick={() => selectActiveWindow(id)}
        >
            <TitleBar id={id} />
            <div className={styles.content}>{children}</div>
        </div>
    )
}

export default Window;