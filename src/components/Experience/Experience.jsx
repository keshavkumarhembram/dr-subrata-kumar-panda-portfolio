import experience from "./../../data/experience.json";
import Position from "./Position";

import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <div className={styles.container}>
    <div className={styles.experience}>
      <h2>Work Experience</h2>
      <p>
        <span>Total Experience: </span>
        {experience.Total_Experience}
      </p>
      <div>
        <h3>Teaching Experience</h3>
        <p>
          <span>Total Years:</span>
          {experience.Teaching_Experience.Total_Years}
        </p>
        <div>
          {experience.Teaching_Experience.Positions.map((pos) => (
            <Position
              key={pos.Position}
              position={pos.Position}
              institute={pos.Institute}
              location={pos.Location}
              period={pos.Period}
              subposition={pos.Sub_Positions}
              researchArea={pos.Research_Area}
            />
          ))}
        </div>
      </div>
      <div>
        <h3>Research Experience</h3>
        <p>
          <span>Total Years:</span>
          {experience.Research_Experience.Total_Years}
        </p>
        <div>
          {experience.Research_Experience.Positions.map((pos) => (
            <Position
              key={pos.Position}
              position={pos.Position}
              institute={pos.Institute}
              location={pos.Location}
              period={pos.Period}
              subposition={pos.Sub_Positions}
              researchArea={pos.Research_Area}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Experience;
