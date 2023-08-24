import { useEffect } from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import Loading from "./Loading";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  Book,
  fetchBooks,
  selectBooks,
  selectLoading,
  selectError,
} from "../redux/books/bookSlice";

const Books = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);
  const selectedBooks = useAppSelector(selectBooks);
  const error = useAppSelector(selectError);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>{"error: Reload the page please"}</div>;
  }
  return (
    <div className="px-6">
      {selectedBooks.map((book: Book) => (
        <Link to={`/books/${book.id}`} key={book.id}>
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            image={book.image}
          />
        </Link>
      ))}
    </div>
  );
};

export default Books;
