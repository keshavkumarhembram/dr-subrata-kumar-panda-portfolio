import styles from './Profile.module.css';


const ProfileData = ({name, position, location,  emails, phone, mobile, children}) => {
    const nameArray = name.split(' ');
    const title = nameArray.pop();
    const startingName = nameArray.join(' ');
    return(
        <div className={styles["profile-details"]}>
            <h1 className={styles['slide-in']}>
            <span className={styles.difftext}>{startingName} </span>
            <span> {title} </span>
            </h1>
            <div>
                <p className={styles.position}>{position}</p>
                <p>{location}</p>
                <a className={styles['cv-download-link']} href='/mycv.docx' download="subrata_panda.docx" ><button> CURRICULUM VITAE</button></a>
                <p>
                    <span>Email: </span>
                    {emails.map(email => <a key={email} className={styles.email} href={`mailto:${email}`}>{email}</a>)}
                </p>
                <p>
                    <span>Phone: </span>
                    {phone.join(', ')}
                </p>
                <p>
                    <span>Mobile: </span>
                    {mobile.join(', ')}
                </p>
            </div>
            {children}
        </div>
    )
}

export default ProfileData;