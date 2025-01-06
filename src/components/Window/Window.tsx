import { CSSProperties, ReactNode } from 'react';
import TitleBar from './TitleBar/TitleBar';
import styles from './Window.module.css';

interface WindowProps {
    id: string;
    children: ReactNode;
    style?: CSSProperties;
}

const Window: React.FC<WindowProps> = ({ id, children, style }) => {
    return (
        <div className={styles.window} style={style}>
            <TitleBar id={id} />
            <div className={styles.content}>{children}</div>
        </div>
    )
}

export default Window;