import { ReactNode } from "react";

export interface WindowState {
    id: string;
    src: string;
    alt: string;
    label: string;
    isOpen: boolean;
    content: ReactNode;
}

export interface WindowContextProps {
    windows: Array<WindowState>;
    toggleWindow: (id: string) => void;
}

export interface WindowProviderProps {
    children: ReactNode;
}