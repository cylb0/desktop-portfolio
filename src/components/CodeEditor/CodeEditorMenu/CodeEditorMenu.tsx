import { useState } from 'react';
import useMobile from '../../../hooks/useMobile';
import styles from './CodeEditorMenu.module.css';
import CodeEditorFile from './CodeEditorMenuGroup/CodeEditorFile/CodeEditorFile';
import CodeEditorMenuGroup from './CodeEditorMenuGroup/CodeEditorMenuGroup';
import { IconChevronRight } from '@tabler/icons-react';
import { useCodeEditorContext } from '../../../contexts/CodeEditorContext';

const CodeEditorMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const isMobile = useMobile();
    const { files } = useCodeEditorContext();

    return (
        <div className={styles.codeEditorMenu}>
            {isMobile && !isOpen &&
                <div
                    className={styles.menuBand}
                    onClick={() => setIsOpen(true)}
                >
                    <span><IconChevronRight color='white' /></span>
                </div>
            }
            <div
                className={`${styles.menu} ${isMobile && isOpen ? styles.open : ''}`}
                onClick={() => setIsOpen(false)}
            >
                {files.map((group, gIndex) => 
                    <CodeEditorMenuGroup
                        key={`group-${gIndex}`} 
                        label={group.label}
                    >
                        {group.content.map((file, fIndex) =>
                            <CodeEditorFile
                                key={`file-${fIndex}`}
                                file={file}
                            />
                        )}
                    </CodeEditorMenuGroup>
                )}
            </div>
        </div>
    );
};

export default CodeEditorMenu;