import ProfileIcon from '../assets/profile.png';
import ResumeIcon from '../assets/resume.png';
import ProjectsIcon from '../assets/projects.png';
import ContactIcon from '../assets/contact.png';
import { WindowState } from '../contexts/WindowContext';

const NavbarItems: Array<WindowState> = [
    {
        id: '1',
        src: ProfileIcon,
        alt: 'Profile icon',
        label: 'Présentation',
        isOpen: true,
        content: undefined
    },
    {
        id: '2',
        src: ResumeIcon,
        alt: 'Resume icon',
        label: 'CV',
        isOpen: false,
        content: undefined
    },
    {
        id: '3',
        src: ProjectsIcon,
        alt: 'Projects icon',
        label: 'Projects',
        isOpen: false,
        content: undefined
    },
    {
        id: '4',
        src: ContactIcon,
        alt: 'Contact icon',
        label: 'Contact',
        isOpen: false,
        content: undefined
    },
]

export default NavbarItems;