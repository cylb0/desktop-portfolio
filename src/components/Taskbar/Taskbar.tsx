import useMobile from '../../hooks/useMobile';
import styles from './Taskbar.module.css';
import { IconSquare, IconTallymark3, IconChevronLeft } from '@tabler/icons-react';
import TaskbarButton from './TaskbarButton/TaskbarButton';
import { useWindowContext } from '../../contexts/WindowContext';
import MinimizedWindow from './MinimizedWindow/MinimizedWindow';

const Taskbar: React.FC = () => {
    const isMobile = useMobile();
    const {
        closeCarousel,
        closeWindow,
        maxZIndex,
        minimizeAllWindows,
        restoreWindow,
        toggleIsCarouselDisplayed,
        windows
    } = useWindowContext();
    const activeWindow = windows.find((window) => window.zIndex === maxZIndex);

    return (
        <div className={styles.taskbar}>
            {!isMobile &&
                <>
                    {windows
                        .filter((window) => window.isMinimized)
                        .map((window) => 
                            <MinimizedWindow
                                key={window.id}
                                src={window.src}
                                alt={window.alt}
                                onClick={() => restoreWindow(window.id)}
                            />
                        )};
                </> 
            }
            {isMobile &&
                <>
                    <TaskbarButton icon={<IconTallymark3 color="#f8f8f6" />} onClick={() => {
                        minimizeAllWindows();
                        toggleIsCarouselDisplayed();
                    }} />
                    <TaskbarButton icon={<IconSquare color="#f8f8f6" />} onClick={() => {
                        minimizeAllWindows();
                        closeCarousel();
                    }} />
                    <TaskbarButton icon={<IconChevronLeft color="#f8f8f6" />} onClick={() => {
                        activeWindow && closeWindow(activeWindow.id);
                    }} />
                </>
            }
        </div>
    )
}

export default Taskbar;