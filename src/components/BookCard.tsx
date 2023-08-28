import React from "react";

interface BookCardProps {
  title: string;
  author: string;
  image: string;
  bookFile?: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, image }) => {
  return (
    <div className=" border shadow-md w-[15%] pb-3 mt-8 font-light text-xl rounded-md">
      <img className="w-full" src={image} alt={`Cover of ${title}`} />
      <div className="pl-2">
        <h2 className="pt-3">
          Title: <span className="ml-1">{title}</span>
        </h2>
        <p className="pt-2">
          Author: <span className="ml-1">{author}</span>
        </p>
      </div>
    </div>
  );
};

export default BookCard;
