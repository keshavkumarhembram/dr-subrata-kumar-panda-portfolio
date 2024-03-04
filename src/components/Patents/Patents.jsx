import PatentCard from "./PatentCard";
import styles from './Patents.module.css';

import patents from './../../data/patents.json';

const Patents = () => {
    return (
        <div className={styles.container}>
        <section className={styles.patents} id="patents">
            <h2>
                Patents
            </h2>
            <div className={styles["patents-container"]}>
                <div>
                {patents.map(patent => <PatentCard key={patent.title} patentDetails={patent} />)}
                </div>
            </div>
        </section>
        </div>
    )
}

export default Patents;