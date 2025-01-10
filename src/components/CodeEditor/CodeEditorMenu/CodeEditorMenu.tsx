import { useState } from 'react';
import useMobile from '../../../hooks/useMobile';
import styles from './CodeEditorMenu.module.css';
import CodeEditorFile from './CodeEditorMenuGroup/CodeEditorFile/CodeEditorFile';
import CodeEditorMenuGroup from './CodeEditorMenuGroup/CodeEditorMenuGroup';
import { IconChevronRight } from '@tabler/icons-react';

const CodeEditorMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const isMobile = useMobile();

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
                <CodeEditorMenuGroup label={'presentation'}>
                    <CodeEditorFile letter={'J'} color={"#FF0004"} label={'File.java'} />
                    <CodeEditorFile letter={'J'} color={"#FF0004"} label={'File.java'} />
                </CodeEditorMenuGroup>

                <CodeEditorMenuGroup label={'skills'}>
                    <CodeEditorFile letter={'J'} color={"#FF0004"} label={'File.java'} />
                    <CodeEditorFile letter={'J'} color={"#FF0004"} label={'File.java'} selected />
                    <CodeEditorFile letter={'J'} color={"#FF0004"} label={'File.java'} />
                </CodeEditorMenuGroup>
            </div>
        </div>
    );
};

export default CodeEditorMenu;