import { useEffect } from 'react';
import styles from './Code.module.css';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-java';

interface CodeProps {
    code: string;
    language: string;
}

const Code: React.FC<CodeProps> = ({ code, language }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div className={styles.code}>
            <pre
                style={{
                    background: 'transparent',
                }}
            >
                <code className={`language-${language}`}>
                    {code}
                </code>
            </pre>
        </div>
    );
};

export default Code;