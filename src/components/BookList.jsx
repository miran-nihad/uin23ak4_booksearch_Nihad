import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookList = () => {
  const { bookId } = useParams();
  const [bookLists, setBookList] = useState(null);

  useEffect(() => {
    const fetchBookList = async () => {
      const response = await fetch(`https://openlibrary.org/works/${bookId}.json`);
      const data = await response.json();
      setBookList(data);
    };

    fetchBookList();
  }, [bookId]);

  if (!bookLists) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{bookLists.title}</h2>
      <p>Author: {bookLists.authors?.map(author => author.name).join(", ")}</p>
      <p>First Published: {bookLists.first_publish_year}</p>
      <p>Description: {bookLists.description}</p>
      <p>Number of Pages: {bookLists.number_of_pages}</p>
      <p>ISBN: {bookLists.isbn?.join(", ")}</p>
      
    </div>
  );
};

export default BookList;
