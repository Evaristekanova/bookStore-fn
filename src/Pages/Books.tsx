import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import BookCard from "../components/BookCard";
import { BOOKS_QUERY } from "../graphql/BOOKS_QUERY";

interface BookProps {
  id: number;
  author: string;
  categoryId: string;
  cloudinaryId: string;
  image: string;
  title: string;
}

const Books = () => {
  const { loading, error, data } = useQuery(BOOKS_QUERY);
  const [books, setBooks] = useState<BookProps[]>([]);

  useEffect(() => {
    if (!loading && !error && data) {
      setBooks(data.books);
    }
  }, [data, loading, error]);
  console.log(books);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(There was an error. Please reload the page)</p>;

  return (
    <div className="px-6">
      {books.map((book: BookProps) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          image={book.image}
        />
      ))}
    </div>
  );
};

export default Books;
