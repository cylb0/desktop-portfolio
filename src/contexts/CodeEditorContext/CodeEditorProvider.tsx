import { createContext, useState } from "react";
import { CodeEditorContextType, CodeEditorProviderProps } from "./types";
import { FileContent } from "../../types/AboutMe";
import AboutMe, { MORGAN_FILE } from "../../constants/AboutMe/AboutMe";

const CodeEditorContext = createContext<CodeEditorContextType | undefined>(undefined);

export const CodeEditorProvider: React.FC<CodeEditorProviderProps> = ({ children }) => {
    const files = AboutMe;
    const [selectedFile, setSelectedFile] = useState<FileContent>(MORGAN_FILE);

    const handleSelectFile = (file: FileContent) => setSelectedFile(file);

    return (
        <CodeEditorContext.Provider value={{ files, selectedFile, handleSelectFile }}>
            {children}
        </CodeEditorContext.Provider>
    );
};

export default CodeEditorContext;
