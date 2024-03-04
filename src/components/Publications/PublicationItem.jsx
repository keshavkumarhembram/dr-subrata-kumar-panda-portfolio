import React from 'react';
import styles from './Publications.module.css';

const PublicationItem = ({ idx, authors, year, title, journal, status, impactFactor, databases }) => {
  const boldPandaSK = authors ? authors.map(author => {
    return author;
  }): "";

  const emphasizedFields = {
    databases: databases ? databases.map(db => <em key={db}>{db},</em>): "",
    year: <em>{year}</em>,
    journal: <em>{journal}</em>
  };

  return (
    <div className={`${idx % 2 === 0 ? styles.even: styles.odd} ${styles['publications-item']}`}>
      {boldPandaSK.join(', ')}, ({emphasizedFields.year}),{title} {emphasizedFields.journal}, <em>{status}</em>, (IF: {impactFactor}), {emphasizedFields.databases}
    </div>
  );
};

export default PublicationItem;
