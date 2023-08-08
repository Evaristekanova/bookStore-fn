import React from "react";

interface BookCardProps {
  title: string;
  author: string;
  image: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, image}) => {
  return (
    <div className="book-card">
      <img src={image} alt={`Cover of ${title}`} />
      <h2>{title}</h2>
      <p>By: {author}</p>
    </div>
  );
};

export default BookCard;
