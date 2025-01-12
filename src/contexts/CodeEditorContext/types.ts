import { ReactNode } from "react";
import { FileContent, FileGroup } from "../../types/AboutMe";

export interface CodeEditorProviderProps {
    children: ReactNode;
}

export interface CodeEditorContextType {
    files: Array<FileGroup>;
    selectedFile: FileContent;
    handleSelectFile: (file: FileContent) => void;
}
