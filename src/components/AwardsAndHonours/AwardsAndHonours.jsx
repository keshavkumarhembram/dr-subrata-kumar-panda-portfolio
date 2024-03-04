import awardsAndHonour from "./../../data/awardsAndHonour.json";
import styles from './AwardsAndHonours.module.css';

const AwardsAndHonours = () => {
  return (
    <div className={styles['awards-and-honours']}>
      <h2>Awards and Honours</h2>
      <div>
        <h3>Awards</h3>
        {awardsAndHonour.ProfessionalRecognition.Awards.map((award) => (
          <p key={award.Description}>
            <span className={styles.award}>{award.AwardType} </span>
            <span> {award.Description}</span>
          </p>
        ))}
      </div>
      <div>
        <h3>Fellowships</h3>
        {awardsAndHonour.ProfessionalRecognition.Fellowships.map(
          (fellowship) => (
            <p key={fellowship}>{fellowship}</p>
          )
        )}
      </div>
      <div>
        <h3>Memberships</h3>
        {awardsAndHonour.ProfessionalRecognition.Memberships.map(
          (membership) => (
            <p key={membership}>{membership}</p>
          )
        )}
      </div>
    </div>
  );
};

export default AwardsAndHonours;
