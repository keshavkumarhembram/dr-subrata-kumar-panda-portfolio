import PublicationItem from "./PublicationItem";

import publications from "./../../data/publications.json";
import publishedAndAccepted from './../../data/publishedAndAccepted.json';
import styles from "./Publications.module.css";

const Publications = () => {
  return (
    <div className={styles.publications}>
        <h2>Publications</h2>
      <div className={styles['publications-list']}>
        {publications.map((publication, idx) => (
          <PublicationItem
            idx={idx}
            key={publication.title + idx}
            authors={publication.authors}
            year={publication.year}
            title={publication.title}
            journal={publication.journal}
            status={publication.status}
            impactFactor={publication.impactFactor}
            databases={publication.databases}
          />
        ))}
      </div>
      <h2>Published/Accepted in International/National Conferences</h2>
            <div className={styles['publications-list']}>
                {publishedAndAccepted.map((item, idx) => <p className={`${idx % 2 === 0 ? styles.even: styles.odd} ${styles['publications-item']}`} key={item}>{item}</p>)}
            </div>
    </div>
  );
};

export default Publications;
