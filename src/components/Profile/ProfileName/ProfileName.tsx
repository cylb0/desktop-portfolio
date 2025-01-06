import styles from './ProfileName.module.css';

interface ProfileNameProps {
    name: string;
    job: string;
}

const ProfileName: React.FC<ProfileNameProps> = ({ name, job }) => {
    return (
        <>
            <h1 className={styles.profileName}>{name}</h1>
            <h2 className={styles.profileJob}>{job}</h2>
        </>
    )
}

export default ProfileName;