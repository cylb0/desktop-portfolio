import { useEffect } from 'react';
import styles from './Code.module.css';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-java';
import { useCodeEditorContext } from '../../../contexts/CodeEditorContext';

const Code: React.FC = () => {
    const { selectedFile } = useCodeEditorContext();

    useEffect(() => {
        Prism.highlightAll();
    }, [selectedFile]);

    return (
        <div className={styles.code}>
            <pre
                style={{
                    background: 'transparent',
                }}
            >
                <code className={`language-${selectedFile.language.label}`}>
                    {selectedFile.src}
                </code>
            </pre>
        </div>
    );
};

export default Code;