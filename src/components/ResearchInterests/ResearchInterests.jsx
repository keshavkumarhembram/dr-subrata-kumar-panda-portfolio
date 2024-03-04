import researchInterest from './../../data/researchInterest.json';
import styles from './ResearchInterests.module.css';
const ResearchInterests = () => {
    return (
        <div className={styles['research-interests']}>
            <h2>
                Research Interests
            </h2>
            <ul>
            {researchInterest.ResearchInterests.map(interest => <li key={interest}>{interest}</li>)}
            </ul>
        </div>
    )
};

export default ResearchInterests;