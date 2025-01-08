import { createContext, useState } from "react";
import { WindowContextProps, WindowPosition, WindowProviderProps, WindowState } from "./types";
import NavbarItems from "../../constants/NavbarItems";

const WindowContext = createContext<WindowContextProps | undefined>(undefined);

export const WindowProvider: React.FC<WindowProviderProps> = ({ children }) => {
    const [windows, setWindows] = useState<Array<WindowState>>(NavbarItems);
    const [maxZIndex, setMaxZIndex] = useState<number>(1);

    const openWindow = (id: string) => {
        setWindows((prev) => {
            const isAlreadyOpen = prev.find((window) => window.id === id)?.isOpen;
            if (isAlreadyOpen) return prev;

            const gap = 10;

            const windowWidth = window.innerWidth * .8;
            const windowHeight = window.innerHeight * .9;

            const baseX = (window.innerWidth - windowWidth) / 2;
            const baseY = (window.innerHeight - windowHeight) / 2;

            const openWindows = prev.filter((win) => win.isOpen);
            const positions = openWindows.map((win) => win.position);

            let x = baseX;
            let y = baseY;

            while (positions.some((pos) => pos?.x === x && pos.y === y)) {
                x += gap;
                y += gap;
            }

            return prev.map((window) =>
                window.id === id && window.isOpen === false
                ? {
                    ...window,
                    isOpen: true,
                    zIndex: maxZIndex + 1,
                    position: window.position || { x, y },
                }
                : window
            )
        });
        setMaxZIndex((prev) => prev + 1);
    };

    const closeWindow = (id: string) => {
        setWindows((prev) =>
            prev.map((window) =>
                window.id === id
                ? {
                    ...window,
                    isOpen: false,
                    position: undefined,
                }
                : window
            )
        );
    };

    const selectActiveWindow = (id: string) => {
        let updatedZIndex = false;

        setWindows((prev) =>
            prev.map((window) => {
                if (window.id === id) {
                    if (window.zIndex < maxZIndex) {
                        updatedZIndex = true;
                        console.log('new active: ', id)
                        return { ...window, zIndex: maxZIndex + 1 };
                    }
                    return { ...window };
                }
                return { ...window };
            })
        )

        if (updatedZIndex) {
            setMaxZIndex((prev) => prev + 1);
        }
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

    return (
        <WindowContext.Provider value={{ windows, openWindow, closeWindow, selectActiveWindow, updateWindowPosition }}>
            {children}
        </WindowContext.Provider>
    );
}

export default WindowContext;