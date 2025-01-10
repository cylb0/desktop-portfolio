import { IconChevronDown, IconChevronRight } from '@tabler/icons-react';
import styles from './CodeEditorMenuGroup.module.css';
import { ReactNode, useState } from 'react';

interface CodeEditorMenuGroupProps {
    label: string;
    children: ReactNode;
}

const CodeEditorMenuGroup:React.FC<CodeEditorMenuGroupProps> = ({ label, children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    return (
        <div>
            <div
                className={styles.header}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <div
                    className={styles.chevron}
                >
                    {isOpen 
                        ? <IconChevronDown color="white" /> 
                        : <IconChevronRight color="white" />
                    }
                </div>
                <span className={styles.label}>{label}</span>
            </div>
            {isOpen && <div className={styles.files}>{children}</div>}
        </div>
    )
};

export default CodeEditorMenuGroup;
