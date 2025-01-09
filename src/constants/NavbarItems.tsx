import ProfileIcon from '../assets/profile.png';
import ResumeIcon from '../assets/resume.png';
import ProjectsIcon from '../assets/projects.png';
import ContactIcon from '../assets/contact.png';
import { WindowState } from '../contexts/WindowContext';
import CodeEditor from '../components/CodeEditor/CodeEditor';

const NavbarItems: Array<WindowState> = [
    {
        id: '1',
        src: ProfileIcon,
        alt: 'Profile icon',
        label: 'Présentation',
        isOpen: false,
        isMinimized: false,
        content: <CodeEditor />,
        zIndex: 1,
    },
    {
        id: '2',
        src: ResumeIcon,
        alt: 'Resume icon',
        label: 'CV',
        isOpen: false,
        isMinimized: false,
        content: undefined,
        zIndex: 1,
    },
    {
        id: '3',
        src: ProjectsIcon,
        alt: 'Projects icon',
        label: 'Projects',
        isOpen: false,
        isMinimized: false,
        content: undefined,
        zIndex: 1,
    },
    {
        id: '4',
        src: ContactIcon,
        alt: 'Contact icon',
        label: 'Contact',
        isOpen: false,
        isMinimized: false,
        content: undefined,
        zIndex: 1,
    },
]

export default NavbarItems;
