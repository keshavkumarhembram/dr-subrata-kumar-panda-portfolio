import styles from "./Profile.module.css";

import ProfilePic from "./../../assets/img/content/profile-pic.jpeg";
import ProfilePic1 from './../../assets/img/content/profile-pic1.jpeg';
import profileData from "./../../data/profile.json";

import ProfileData from "./ProfileData";

const ProfileCard = () => {
  return (
    <div className={styles.container}>
    <div className={styles["profile-card"]}>
      <img className={styles["profile-pic"]} src={ProfilePic1 || ProfilePic} />
      <ProfileData
        name={profileData[0].name}
        position={profileData[0].position}
        location={profileData[0].location}
        emails={profileData[0].email}
        phone={profileData[0].phone}
        mobile={profileData[0].mobile}
      >
        
      </ProfileData>
    </div>
    </div>
  );
};

export default ProfileCard;
