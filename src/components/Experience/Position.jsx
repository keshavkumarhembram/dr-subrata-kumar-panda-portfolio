import styles from './Experience.module.css';

const Position = ({position, institute, location, period, subposition, researchArea}) => {
    return (
        <div className={styles.position}>
            <p><span className={styles.fields}>Position:</span>{position}</p>
            <p><span className={styles.fields}>Institute:</span>{institute}</p>
            <p><span className={styles.fields}>Location:</span>{location}</p>
            <div className={styles.period}>
            <p><span>Period:</span>{period}</p>
            { subposition && subposition.map( sub =>
                (
                    <div key={sub.Position}>
                        <span>{sub.Position} </span>
                        <span> {sub.Period}</span>
                    </div>
                )
            ) }
            { researchArea && <p><span>Research Area: </span>{researchArea}</p>}
            </div>
        </div>
    );
};

export default Position;