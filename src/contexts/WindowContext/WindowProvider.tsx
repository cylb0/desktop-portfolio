import { createContext, useState } from "react";
import { WindowContextProps, WindowProviderProps, WindowState } from "./types";
import NavbarItems from "../../constants/NavbarItems";

const WindowContext = createContext<WindowContextProps | undefined>(undefined);

export const WindowProvider: React.FC<WindowProviderProps> = ({ children }) => {
    const [windows, setWindows] = useState<Array<WindowState>>(NavbarItems);

    const toggleWindow = (id: string) => {
        setWindows((prev) => 
            prev.map((window) =>
                window.id === id ? { ...window, isOpen: !window.isOpen } : window
            )
        );
    };

    return (
        <WindowContext.Provider value={{ windows, toggleWindow }}>
            {children}
        </WindowContext.Provider>
    )
}

export default WindowContext;