import Background from '../Background/Background';
import BackgroundImage from '../../assets/heic1206a.jpg';
import ProfileCard from '../Profile/ProfileCard/ProfileCard';
import MorganProfilePicture from '../../assets/morgan.jpg';
import styles from './Desktop.module.css';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Taskbar from '../Taskbar/Taskbar';
import { useWindowContext, WindowProvider } from '../../contexts/WindowContext';
import Window from '../Window/Window';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const DesktopContent: React.FC = () => {
    const { windows } = useWindowContext();

    return (
        <div className={styles.desktop}>
            <div className={styles.content}>
                {windows
                    .filter((window) => window.isOpen)
                    .map((window) => (
                    <Window
                        key={window.id}
                        id={window.id}
                    >
                        {window.content}
                    </Window>
                ))}
                <Navbar navbarItems={windows} />
            </div>
            <Taskbar />
        </div>
    );
};

const Desktop: React.FC = () => {
    const [isHomeScreen, setIsHomeScreen] = useState(true);

    return (
        <>
            <Background
                src={BackgroundImage}
                alt={'background'}
                isBlured={isHomeScreen}
                isSpinning={isHomeScreen}
            />
            {isHomeScreen ? (
                <div className={styles.homeScreen}>
                    <ProfileCard
                        src={MorganProfilePicture}
                        alt={'Profile Morgan'}
                        name={'morgan foucaut'}
                        label={'Découvrir'}
                        onClick={() => setIsHomeScreen(false)}
                    />
                </div>
            ) : (
                <DndProvider backend={HTML5Backend}>
                    <WindowProvider>
                        <DesktopContent />
                    </WindowProvider>
                </DndProvider>
            )}
        </>
    )
}

export default Desktop;
