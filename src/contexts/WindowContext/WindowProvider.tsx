import { createContext, useState } from "react";
import { WindowContextProps, WindowProviderProps, WindowState } from "./types";
import NavbarItems from "../../constants/NavbarItems";

const WindowContext = createContext<WindowContextProps | undefined>(undefined);

export const WindowProvider: React.FC<WindowProviderProps> = ({ children }) => {
    const [windows, setWindows] = useState<Array<WindowState>>(NavbarItems);
    const [maxZIndex, setMaxZIndex] = useState<number>(1);

    const openWindow = (id: string) => {
        setWindows((prev) =>
            prev.map((window) =>
                window.id === id ? { ...window, isOpen: true } : window
            )
        );
    };

    const closeWindow = (id: string) => {
        setWindows((prev) =>
            prev.map((window) =>
                window.id === id ? { ...window, isOpen: false } : window
            )
        );
    };

    const selectActiveWindow = (id: string) => {
        setWindows((prev) =>
            prev.map((window) =>
                window.id === id ? { ...window, zIndex: maxZIndex + 1 } : window
            )
        );
        setMaxZIndex((prev) => prev + 1);
    };

    return (
        <WindowContext.Provider value={{ windows, openWindow, closeWindow, selectActiveWindow }}>
            {children}
        </WindowContext.Provider>
    );
}

export default WindowContext;