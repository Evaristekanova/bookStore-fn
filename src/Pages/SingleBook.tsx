import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { saveAs } from "file-saver";
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
  const handleOpen = () => {
    const fileUrl = book.image;
    const fileName = "my-book.jpg";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownload = () => {
    const fileUrl = book.image;
    const fileName = "my-book.jpg";
    saveAs(fileUrl, fileName);
  };

  return (
    <div className="px-12 pt-[5rem]">
      <div className="flex flex-row h-full items-center">
        <img src={book.image} alt={book.title} className="w-[40%]" />
        <div className="flex flex-col justify-center ml-[5rem] ">
          <h1 className="text-3xl font-light">Title: {book.title}</h1>
          <h2 className="text-3xl font-light mt-3">Author: {book.author}</h2>
          <div className="flex flex-row mt-4">
            <button
              className="bg-lightGreen text-white px-4 py-2 rounded-md mr-4"
              onClick={handleOpen}
            >
              Open a Book
            </button>
            <button
              className="bg-lightGreen text-white px-4 py-2 rounded-md"
              onClick={handleDownload}
            >
              Download a Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
