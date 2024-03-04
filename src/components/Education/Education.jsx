import education from "./../../data/education.json";
import EducationPanel from "./EducationPanel";

import styles from './Education.module.css';

const Education = () => {
  return (
    <div id="education" className={styles.container}>
    <div className={styles.education}>
        <h2>Education</h2>
      {education.Education.map((edu) => (
        <EducationPanel
        key={edu.Degree}
          degree={edu.Degree}
          date={edu.Date}
          department={edu.Department}
          institution={edu.Institution}
          thesisTitle={edu.ThesisTitle}
          projectTitle={edu.ProjectTitle}
          supervisor={edu.Supervisor}
          percentage={edu.Percentage}
        />
      ))}
    </div>
    </div>
  );
};

export default Education;
