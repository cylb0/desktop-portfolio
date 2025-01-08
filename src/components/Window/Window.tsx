import { ReactNode, useEffect, useState } from 'react';
import TitleBar from './TitleBar/TitleBar';
import styles from './Window.module.css';
import { useWindowContext } from '../../contexts/WindowContext';
import { useDrag } from 'react-dnd';

interface WindowProps {
    id: string;
    children: ReactNode;
}

const Window: React.FC<WindowProps> = ({ id, children }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const { maxZIndex, windows, selectActiveWindow, updateWindowPosition } = useWindowContext();
    const windowData = windows.find((window) => window.id === id);
    
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
            ref={drag}
            className={`${styles.window}
                        ${isDragging ? styles.isDragging : ''}
                        ${!isDragging && isActive ? styles.active : ''}
                        ${!isDragging && isHovered && !isActive ? styles.selectable : ''}`}
            style={{
                visibility: windowData.isOpen ? 'visible' : 'hidden',
                top: `${windowData.position?.y || 0}px`,
                left: `${windowData.position?.x || 0}px`,
                zIndex: windowData.zIndex,
            }}
            onClick={() => selectActiveWindow(id)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={() => selectActiveWindow(id)}
        >
            <TitleBar id={id} />
            <div className={styles.content}>{children}</div>
        </div>
    )
}

export default Window;