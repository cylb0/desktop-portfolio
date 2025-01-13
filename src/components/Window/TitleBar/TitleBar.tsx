import { useWindowContext } from '../../../contexts/WindowContext';
import useMobile from '../../../hooks/useMobile';
import TitleBarIcon from '../TitleBarIcon/TitleBarIcon';
import styles from './TitleBar.module.css';
import { IconChevronCompactDown, IconSquare, IconSquares, IconX } from '@tabler/icons-react';
import { forwardRef } from 'react';

interface TitleBarProps {
    id: string;
}

const TitleBar = forwardRef<HTMLDivElement, TitleBarProps>(({ id }, ref) => {
    const { windows, closeWindow, minimizeWindow, toggleIsFullscreen } = useWindowContext();
    const windowData = windows.find((window) => window.id === id);
    const isMobile = useMobile();

    if (!windowData) {
        console.error(`Window data with id "${id}" not found.`)
        return null;
    }

    return (
        <div ref={ref} className={styles.titleBar}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>{windowData.label}</h1>
            </div>
            {!isMobile &&
                <div className={styles.buttons}>
                    <TitleBarIcon 
                        icon={<IconChevronCompactDown color="#f8f8f6" stroke={4} />}
                        onClick={() => minimizeWindow(id)}
                    />
                    <TitleBarIcon 
                        icon={windowData.isFullscreen
                            ? <IconSquares color="#f8f8f6" stroke={4} />
                            : <IconSquare color="#f8f8f6" stroke={4} />
                        }
                        onClick={() => toggleIsFullscreen(id)}
                    />
                    <TitleBarIcon 
                        icon={<IconX color="#f8f8f6" stroke={4} />}
                        onClick={() => closeWindow(id)}
                    />
                </div>
            }
        </div>
    )
});

export default TitleBar;