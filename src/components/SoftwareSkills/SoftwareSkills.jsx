import softwareSkills from "./../../data/softwareSkills.json";
import styles from './SoftwareSkills.module.css';

const SoftwareSkills = () => {
  return (
    <div className={styles.container}>
    <div className={styles.skills}>
      <h2 >Software Skills</h2>
      <ul>
        {Object.entries(softwareSkills.SoftwareSkills).map(([category, values]) => (
          <li key={category}>
            <strong>{category}</strong>: {Array.isArray(values) ? values.join(', ') : Object.values(values).join(', ')}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default SoftwareSkills;
