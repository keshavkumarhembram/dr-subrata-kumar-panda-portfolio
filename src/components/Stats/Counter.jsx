import styles from './Stats.module.css';


const Counter = ({name, count}) => {
    return(
        <div>
        <div className={styles['counter-container']}>
            <p className={styles['counter-field']}>{name}</p>
            <p className={styles.counter}><span>{count}</span></p>
        </div>
    </div>
    )
};

export default Counter;