import { useContext } from "react";
import { WindowContextType } from "./types";
import WindowContext from "./WindowProvider";

export const useWindowContext = (): WindowContextType => {
    const context = useContext(WindowContext);
    if (!context) {
        throw new Error('useWindowContext must be used within a WindowProvider');
    }
    return context;
}