import { useEffect } from "react";
import BookCard from "../components/BookCard";
import Loading from "./Loading";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  Book,
  fetchBooks,
  selectBooks,
  selectLoading,
  selectError
} from "../redux/books/bookSlice";

const Books = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);
  const selectedBooks = useAppSelector(selectBooks);
  const error = useAppSelector(selectError);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  console.log(selectedBooks);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>{"error: Reload the page please"}</div>;
  }
  return (
    <div className="px-6">
      {selectedBooks.map((book: Book) => (
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
