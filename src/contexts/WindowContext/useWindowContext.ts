import { useContext } from "react";
import { WindowContextProps } from "./types";
import WindowContext from "./WindowProvider";

export const useWindowContext = (): WindowContextProps => {
    const context = useContext(WindowContext);
    if (!context) {
        throw new Error('useWindowContext must be used within a WindowProvider');
    }
    return context;
}