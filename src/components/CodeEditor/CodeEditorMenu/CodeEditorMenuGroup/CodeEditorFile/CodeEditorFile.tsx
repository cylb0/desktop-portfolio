import styles from './CodeEditorFile.module.css';

interface CodeEditorFileProps {
    letter: string;
    color: string;
    label: string;
    selected?: boolean;
}

const CodeEditorFile: React.FC<CodeEditorFileProps> = ({ letter, color, label, selected = false }) => {
    return (
        <div className={`${styles.file} ${selected ? styles.fileSelected : ''}`}>
            <span
                className={styles.language}
                style={{ color }}
            >
                {letter}
            </span>
            <span
                className={styles.label}
            >
                {label}
            </span>
        </div>
    );
};

export default CodeEditorFile;
