import React from 'react';

const PublicationList = ({ publications }) => {
  return (
    <div>
      {publications.map((publication, index) => (
        <div key={index}>
          <h3>{publication.title}</h3>
          {publication.type && <p>Type: {publication.type}</p>}
          {publication.authors && (
            <p>
              Authors: {publication.authors.join(', ')}
            </p>
          )}
          {publication.publication && <p>Publication: {publication.publication}</p>}
          {publication.book_title && <p>Book Title: {publication.book_title}</p>}
          {publication.subject && (
            <p>Subject: {publication.subject.join(', ')}</p>
          )}
          {publication.editors && (
            <p>Editors: {publication.editors.join(', ')}</p>
          )}
          {publication.publisher && <p>Publisher: {publication.publisher}</p>}
          {publication.ebook_isbn && <p>Ebook ISBN: {publication.ebook_isbn}</p>}
          {publication.doi && (
            <p>
              DOI: <a href={publication.doi}>{publication.doi}</a>
            </p>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default PublicationList;
