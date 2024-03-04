import styles from './ArticleTable.module.css';

const ArticleTable = ({ articles }) => {
    return (
        <div className={styles.container}>
            <div className={styles.table}>
                <h2>Article/Books Review</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>S. No</th>
            <th>Name of the Journal/Book</th>
            <th>Publisher</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {articles.map(article => (
            <tr key={article.S_No}>
              <td>{article.S_No}</td>
              <td>{article["Name_of_the_Journal/Book"]}</td>
              <td>{article.Publisher}</td>
              <td>{article.Role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
    );
  };
  
  export default ArticleTable;