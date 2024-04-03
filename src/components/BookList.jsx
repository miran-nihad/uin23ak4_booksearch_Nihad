import React from "react";


export default function BookList({ books }) {
  return (
    <div>
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
}