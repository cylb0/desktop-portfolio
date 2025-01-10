import { ReactNode } from "react";

export interface WindowState {
    id: string;
    src: string;
    alt: string;
    label: string;
    isOpen: boolean;
    isMinimized: boolean;
    content: ReactNode;
    zIndex: number;
    position?: WindowPosition;
}

export interface WindowContextProps {
    closeAllWindows: () => void;
    closeCarousel: () => void;
    closeWindow: (id: string) => void;
    isCarouselDisplayed: boolean;
    maxZIndex: number;
    minimizeAllWindows: () => void;
    minimizeWindow: (id: string) => void;
    openWindow: (id: string) => void;
    restoreWindow: (id: string) => void;
    selectActiveWindow: (id: string) => void;
    toggleIsCarouselDisplayed: () => void;
    updateWindowPosition: (id: string, position: WindowPosition) => void;
    windows: Array<WindowState>;
}

export interface WindowProviderProps {
    children: ReactNode;
}

export interface WindowPosition {
    x: number;
    y: number;
}