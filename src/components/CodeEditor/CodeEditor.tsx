import Code from './Code/Code';
import styles from './CodeEditor.module.css';
import CodeEditorMenu from './CodeEditorMenu/CodeEditorMenu';
import { CodeEditorProvider } from '../../contexts/CodeEditorContext';

const CodeEditor: React.FC = () => {

    return (
        <CodeEditorProvider>
            <div className={styles.codeEditor}>
                <CodeEditorMenu />
                <Code />
            </div>
        </CodeEditorProvider>
    );
};

export default CodeEditor;