import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { selectBookById, fetchBooks } from "../redux/books/bookSlice";
import Loading from "./Loading";

const SingleBook = () => {
  const { id } = useParams<{ id: string }>();
  const bookId = parseInt(id as string);
  const dispatch = useAppDispatch();
  const book = useAppSelector((state) => selectBookById(state, bookId));

  useEffect(() => {
    dispatch(fetchBooks());
  });

  if (!book) {
    return <Loading />;
  }
  console.log(book);
  const handleDownload = () => {
    const fileUrl = "https://example.com/path/to/your/file.pdf";
    const fileName = "my-book.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="px-6 pt-8">
      <div className="flex flex-row">
        <img src={book.image} alt={book.title} className="w-[40%]" />
        <div className="flex flex-col justify-center ml-14 ">
          <h1 className="text-3xl font-light">Title: {book.title}</h1>
          <h2 className="text-3xl font-light mt-3">Author: {book.author}</h2>
          <button
            onClick={handleDownload}
            className="mt-4 py-2 px-4 bg-lightGreen border border-white hover:bg-white hover:border hover:border-lightGreen hover:text-lightGreen rounded-sm text-white font-light text-xl"
          >
            Download a book
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
