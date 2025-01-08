import { ReactNode } from "react";

export interface WindowState {
    id: string;
    src: string;
    alt: string;
    label: string;
    isOpen: boolean;
    content: ReactNode;
    zIndex: number;
    position?: WindowPosition;
}

export interface WindowContextProps {
    maxZIndex: number;
    windows: Array<WindowState>;
    openWindow: (id: string) => void;
    closeWindow: (id: string) => void;
    selectActiveWindow: (id: string) => void;
    updateWindowPosition: (id: string, position: WindowPosition) => void;
}

export interface WindowProviderProps {
    children: ReactNode;
}

export interface WindowPosition {
    x: number;
    y: number;
}