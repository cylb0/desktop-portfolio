import { useContext } from "react";
import { CodeEditorContextType } from "./types";
import CodeEditorContext from "./CodeEditorProvider";

export const useCodeEditorContext = (): CodeEditorContextType => {
    const context = useContext(CodeEditorContext);
    if (!context) {
        throw new Error('useCodeEditorContext must be used within a CodeEditorContextProvider');
    }
    return context;
};
