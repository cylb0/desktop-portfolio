import styles from './ProfilePicture.module.css';

interface ProfilePictureProps {
    src: string;
    alt: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ src, alt }) => {
    return <img src={src} alt={alt} className={styles.profilePicture} />
}

export default ProfilePicture;