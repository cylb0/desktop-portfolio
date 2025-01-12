import { FileContent, FileGroup } from "../../types/AboutMe";
import { Languages } from "../Languages";
import BIO_CODE from "./Bio";
import MORGAN_CODE from "./Morgan";
import SKILLS_CODE from "./Skills";

export const MORGAN_FILE: FileContent = {
    label: 'Morgan.java',
    src: MORGAN_CODE,
    language: Languages.Java,
};

const BIO_FILE: FileContent = {
    label: 'Bio.java',
    src: BIO_CODE,
    language: Languages.Java,
};

const SKILLS_FILE: FileContent = {
    label: 'Skills.java',
    src: SKILLS_CODE,
    language: Languages.Java,
};

const AboutMe: Array<FileGroup> = [
    {
        label: 'presentation',
        content: [MORGAN_FILE],
    },
    {
        label: 'constants',
        content: [BIO_FILE, SKILLS_FILE],
    }
];

export default AboutMe;
