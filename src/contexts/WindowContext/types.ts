import { ReactNode } from "react";

export interface WindowState {
    id: string;
    src: string;
    alt: string;
    label: string;
    isOpen: boolean;
    content: ReactNode;
    zIndex: number;
}

export interface WindowContextProps {
    windows: Array<WindowState>;
    openWindow: (id: string) => void;
    closeWindow: (id: string) => void;
    selectActiveWindow: (id: string) => void;
}

export interface WindowProviderProps {
    children: ReactNode;
}