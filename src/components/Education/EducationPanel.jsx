import styles from './Education.module.css';

const EducationPanel = ({degree, date, department, institution, thesisTitle, projectTitle, supervisor, percentage}) => {
    return (<div className={styles['education-panel']}>
        <div className={styles.date}>
        <p>{date}</p>
        </div>
        <div>
        <p className={styles.degree}>{degree}</p>
        <p className={styles.department}>{department}</p>
        <p className={styles.institution}>{institution}</p>
        {thesisTitle && <p className={styles.title}><span>Thesis Title: </span>{thesisTitle}</p>}
        {projectTitle && <p className={styles.title}><span>Project Title: </span>{projectTitle}</p>}
        <p className={styles.supervisor}><span>Supervisor: </span>{supervisor}</p>
        </div>
    </div>)
};

export default EducationPanel;