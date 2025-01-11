import { createContext, useState } from "react";
import { WindowContextProps, WindowPosition, WindowProviderProps, WindowState } from "./types";
import NavbarItems from "../../constants/NavbarItems";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { WINDOWS_CASCADE_GAP } from "../../constants/Windows";

const WindowContext = createContext<WindowContextProps | undefined>(undefined);

export const WindowProvider: React.FC<WindowProviderProps> = ({ children }) => {
    const [windows, setWindows] = useState<Array<WindowState>>(NavbarItems);
    const { width: windowWidth, height: windowHeight } = useWindowDimensions();
    const [maxZIndex, setMaxZIndex] = useState<number>(1);
    const [isCarouselDisplayed, setIsCarouselDisplayed] = useState<boolean>(false);

    const toggleIsCarouselDisplayed = () => {
        setIsCarouselDisplayed((prev) => !prev);
    };

    const toggleIsFullscreen = (id: string) => {
        setWindows((prev) =>
            prev.map((window) =>
                window.id === id ? toggleFullScreen(window) : window
            )
        )
    }
    
    const closeCarousel = () => {
        setIsCarouselDisplayed(false);
    }

    const openWindow = (id: string) => {
        setWindows((prev) => {
            const { baseX, baseY } = computeBasePosition(windowWidth, windowHeight);

            const openWindows = prev.filter((win) => win.isOpen);
            const positions = openWindows.map((win) => win.position);

            const { x, y } = findAvailablePosition(baseX, baseY, WINDOWS_CASCADE_GAP, positions);

            return prev.map((window) => {
                if (window.id === id && window.isMinimized) {
                    return restore(window);
                }

                if (window.id === id && !window.isOpen) {
                    return open(window, { x, y });
                }

                if (window.id === id && window.isOpen && window.zIndex < maxZIndex) {
                    return active(window);
                } 

                return window;
            });
        });
        setMaxZIndex((prev) => prev + 1);
    };

    const closeWindow = (id: string) => {
        setWindows((prev) =>
            prev.map((window) =>
                window.id === id ? close(window) : window
            )
        );
    };

    const minimizeWindow = (id: string) => {
        setWindows((prev) =>
            prev.map((window) =>
                window.id === id ? minimize(window) : window
            )
        )
    }

    const restoreWindow = (id: string) => {
        setWindows((prev) =>
            prev.map((window) =>
                window.id === id ? restore(window) : window
            ) 
        );
        setMaxZIndex((prev) => prev + 1);
    }

    const closeAllWindows = () => {
        setWindows((prev) =>
            prev.map((window) => close(window))
        );
    };

    const minimizeAllWindows = () => {
        setWindows((prev) =>
            prev.map((window) =>
                window.isOpen ? minimize(window) : window
            )
        );
    };

    const selectActiveWindow = (id: string) => {
        setWindows((prev) =>
            prev.map((window) => 
                window.id === id ? active(window) : window
            )
        );
        setMaxZIndex((prev) => prev + 1);
    };
    
    const updateWindowPosition = (id: string, position: WindowPosition) => {
        setWindows((prev) =>
            prev.map((window) =>
                window.id === id ? {
                    ...window,
                    position,
                } : window
            )
        );
    };

    const open = (window: WindowState, position: WindowPosition): WindowState => {
        return {
            ...window,
            isOpen: true,
            zIndex: maxZIndex + 1,
            position: position,
        }
    }

    const minimize = (window: WindowState): WindowState => {
        return {
            ...window,
            isMinimized: true,
        }
    }

    const restore = (window: WindowState): WindowState => {
        return {
            ...window,
            isMinimized: false,
            zIndex: maxZIndex + 1,
        }
    }

    const close = (window: WindowState): WindowState => {
        return {
            ...window,
            isOpen: false,
            isMinimized: false,
            position: undefined,
        }
    }

    const active = (window: WindowState): WindowState => {
        return {
            ...window,
            zIndex: maxZIndex + 1,
        }
    }

    const toggleFullScreen = (window: WindowState): WindowState => {
        return {
            ...window,
            isFullscreen: !window.isFullscreen,
        }
    }

    const computeBasePosition = (windowWidth: number, windowHeight: number) => {
        const baseX = (window.innerWidth - windowWidth) / 2;
        const baseY = (window.innerHeight - windowHeight) / 2;

        return { baseX, baseY };
    }

    const findAvailablePosition = (baseX: number, baseY: number, gap: number, positions: Array<WindowPosition | undefined>) => {
        let x = baseX;
        let y = baseY;

        while (positions.some((pos) => pos?.x === x && pos.y === y)) {
            x += gap;
            y += gap;
        }

        return { x, y };
    }

    return (
        <WindowContext.Provider value={{
            closeAllWindows,
            closeCarousel,
            closeWindow,
            isCarouselDisplayed,
            minimizeAllWindows,
            minimizeWindow,
            openWindow,
            maxZIndex,
            restoreWindow,
            selectActiveWindow,
            toggleIsCarouselDisplayed,
            toggleIsFullscreen,
            updateWindowPosition,
            windows,
        }}>
            {children}
        </WindowContext.Provider>
    );
}

export default WindowContext;