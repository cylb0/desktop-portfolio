import { ReactNode, useEffect, useRef, useState } from 'react';
import TitleBar from './TitleBar/TitleBar';
import styles from './Window.module.css';
import { useWindowContext } from '../../contexts/WindowContext';
import { useDrag } from 'react-dnd';
import useMobile from '../../hooks/useMobile';

interface WindowProps {
    id: string;
    children: ReactNode;
}

const Window: React.FC<WindowProps> = ({ id, children }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const { maxZIndex, windows, selectActiveWindow, updateWindowPosition } = useWindowContext();
    const isMobile = useMobile();
    const windowData = windows.find((window) => window.id === id);
    const ref = useRef<HTMLDivElement>(null);
    
    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: 'WINDOW',
        item: { id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
        end: (item, monitor) => {
            const offset = monitor.getSourceClientOffset();
            if (offset) {
                updateWindowPosition(item.id, { x: offset.x, y: offset.y });
            }
        },
    }));
    
    useEffect(() => {
        dragPreview(null);
    }, [dragPreview])
    
    if (!windowData) return null;
    const isActive = windowData.zIndex === maxZIndex;
    
    return (
        <div
            className={`${styles.window}
                        ${isDragging ? styles.isDragging : ''}
                        ${!isDragging && isActive ? styles.active : ''}
                        ${!isDragging && isHovered && !isActive ? styles.selectable : ''}`}
            style={{
                visibility: (!isMobile && windowData.isOpen && !windowData.isMinimized) || (isMobile && windowData.isOpen && !windowData.isMinimized && isActive) ? 'visible' : 'hidden',
                top: windowData.isFullscreen ? 0 : `${isMobile ? 0 : (windowData.position?.y || 0)}px`,
                left: windowData.isFullscreen ? 0 : `${isMobile ? 0 : (windowData.position?.x || 0)}px`,
                zIndex: windowData.zIndex,
                border: `${isMobile ? 'none' : '1px solid rgba(76, 74, 72, .8)'}`,
                borderRadius: `${isMobile ? '0' : '8px'}`,
                height: windowData.isFullscreen ? 'calc(100vh - 75px)' : undefined,
                width: windowData.isFullscreen ? '100vw' : undefined,
            }}
            onClick={() => selectActiveWindow(id)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={() => selectActiveWindow(id)}
        >
            <TitleBar id={id} ref={isMobile ? ref : drag} />
            <div className={styles.content}>{children}</div>
        </div>
    )
}

export default Window;