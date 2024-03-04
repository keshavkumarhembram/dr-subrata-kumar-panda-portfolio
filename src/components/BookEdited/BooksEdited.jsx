import PublicationList from "./PublicationList";

import styles from './BooksEdited.module.css';

import booksEdited from './../../data/books.json';

const BooksEdited = () => {
    return (
        <div className={styles.container}>
            <div className={styles["books-edited"]}>
            <h2>Books Edited</h2>
            <div>
                <PublicationList publications={booksEdited} />
            </div>
            </div>
        </div>
    )
}

export default BooksEdited;