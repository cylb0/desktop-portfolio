import useMobile from '../../hooks/useMobile';
import styles from './Taskbar.module.css';
import { IconSquare, IconTallymark3, IconChevronLeft } from '@tabler/icons-react';
import TaskbarButton from './TaskbarButton/TaskbarButton';
import { useWindowContext } from '../../contexts/WindowContext';

const Taskbar: React.FC = () => {
    const isMobile = useMobile();
    const { closeCarousel, minimizeAllWindows, restoreWindow, toggleIsCarouselDisplayed, windows } = useWindowContext();

    return (
        <div className={styles.taskbar}>
            {!isMobile &&
                <>
                    {windows
                        .filter((window) => window.isMinimized)
                        .map((window) => (
                            <div
                                key={window.id}
                                onClick={() => restoreWindow(window.id)}
                            >
                                <h1>{window.label}</h1>
                            </div>
                        ))
                    }
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
                    <TaskbarButton icon={<IconChevronLeft color="#f8f8f6" />} onClick={() => {}} />
                </>
            }
        </div>
    )
}

export default Taskbar;