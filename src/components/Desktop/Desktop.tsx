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

const DesktopContent: React.FC = () => {
    const { windows } = useWindowContext();
    const gap = 20;

    return (
        <div className={styles.desktop}>
            <div className={styles.content}>
                {windows
                    .filter((window) => window.isOpen)
                    .map((window, index) => (
                    <Window
                        key={window.id}
                        id={window.id}
                        style={{
                            zIndex: window.zIndex,
                            top: `calc(50% + ${index * gap}px)`,
                            left: `calc(50% + ${index * gap}px)`,
                            transform: 'translate(-50%, -50%)',
                        }}
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
                <WindowProvider>
                    <DesktopContent />
                </WindowProvider>
            )}
        </>
    )
}

export default Desktop;
