import { LanguageDetails } from "./Language";

export interface FileContent {
    label: string;
    src: string;
    language: LanguageDetails;
}

export interface FileGroup {
    label: string;
    content: Array<FileContent>;
}
