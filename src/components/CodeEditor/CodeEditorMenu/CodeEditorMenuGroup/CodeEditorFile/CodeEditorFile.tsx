import { useCodeEditorContext } from '../../../../../contexts/CodeEditorContext';
import { FileContent } from '../../../../../types/AboutMe';
import styles from './CodeEditorFile.module.css';

interface CodeEditorFileProps {
    file: FileContent;
}

const CodeEditorFile: React.FC<CodeEditorFileProps> = ({ file }) => {
    const { handleSelectFile, selectedFile } = useCodeEditorContext();
    const isSelected = selectedFile === file;

    return (
        <div
            className={`${styles.file} ${isSelected ? styles.fileSelected : ''}`}
            onClick={() => handleSelectFile(file)}
        >
            <span
                className={styles.language}
                style={{ color: file.language.color }}
            >
                {file.language.acronym}
            </span>
            <span
                className={styles.label}
            >
                {file.label}
            </span>
        </div>
    );
};

export default CodeEditorFile;
