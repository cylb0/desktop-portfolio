import CTAButton from '../../CTAButton/CTAButton';
import ProfileName from '../ProfileName/ProfileName';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import styles from './ProfileCard.module.css';

interface ProfileCardProps {
    src: string;
    alt: string;
    name: string;
    label: string;
    onClick: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ src, alt, name, label, onClick }) => {
    return (
        <div className={styles.profileCard}>
            <ProfilePicture src={src} alt={alt} />
            <ProfileName name={name} job={'développeur web'} />
            <div>
                <CTAButton label={label} onClick={onClick} />
            </div>
        </div>
    )
}

export default ProfileCard;