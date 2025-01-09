import { MORGAN_CODE } from '../../constants/Morgan';
import Code from './Code/Code';
import styles from './CodeEditor.module.css';
import CodeEditorMenu from './CodeEditorMenu/CodeEditorMenu';

const CodeEditor: React.FC = () => {
    return (
        <div className={styles.codeEditor}>
            <CodeEditorMenu />
            <Code code={MORGAN_CODE} language={"java"} /> 
        </div>
    );
};

export default CodeEditor;