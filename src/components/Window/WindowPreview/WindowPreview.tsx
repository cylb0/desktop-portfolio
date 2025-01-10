import { ReactNode } from "react";
import TitleBar from "../TitleBar/TitleBar";
import styles from './WindowPreview.module.css';

interface WindowPreviewProps {
    id: string;
    children: ReactNode;
}

const WindowPreview: React.FC<WindowPreviewProps> = ({ id, children }) => {
    return (
        <div className={styles.windowPreview}>
            <TitleBar id={id} />
            <div className={styles.content}>{children}</div>
        </div>
    );
};

export default WindowPreview;
