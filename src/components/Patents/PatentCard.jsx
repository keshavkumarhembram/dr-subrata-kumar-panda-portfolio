import styles from './Patents.module.css';

const PatentCard = ({patentDetails}) => {
    console.log(patentDetails.inventors.join(', '));
    return (
        <div className={styles['patent-card']}>
            <h3>{patentDetails.title}</h3>
            <hr/>
            <p className="inventors">
                {patentDetails.inventors.join(', ')}
            </p>
            <p><span className={styles.field} >STATUS: </span>{patentDetails.status}</p>
            {patentDetails.grant_date && <p><span className={styles.field} >GRANT DATE: </span>{patentDetails.grant_date}</p>}
            {patentDetails.patent_number && <p><span className={styles.field} >PATENT NUMBER: </span>{patentDetails.patent_number}</p>}
            {patentDetails.application_number && <p><span className={styles.field} >APPLICATION NUMBER: </span>{patentDetails.application_number}</p>}
            {patentDetails.filing_date && <p><span className={styles.field} >FILING DATE: </span>{patentDetails.filing_date}</p>}
        </div>
    )
}

export default PatentCard;