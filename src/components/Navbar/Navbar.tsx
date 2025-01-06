import { WindowState } from '../../contexts/WindowContext';
import styles from './Navbar.module.css';
import NavButton from './NavButton/NavButton';

interface NavbarProps {
    navbarItems: Array<WindowState>;
}

const Navbar: React.FC<NavbarProps> = ({ navbarItems }) => {
    return (
        <nav className={styles.navbar}>
            {navbarItems.map((item, index) => (
                <NavButton
                    id={item.id}
                    src={item.src}
                    alt={item.alt}
                    label={item.label}
                    key={`navbarItem-${index}`}
                />
            ))}
        </nav>
    )
}

export default Navbar;