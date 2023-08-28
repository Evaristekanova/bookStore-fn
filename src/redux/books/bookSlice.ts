import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { BOOKS_QUERY } from "../../graphql/BOOKS_QUERY";
import { client } from "../../main";

export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  image: string;
  bookFile: string;
  categoryId: number;
  cloudinaryId: string;
  bookCloudinaryId: string;
}

export interface BookState {
  books: Book[];
  loading: boolean;
  error: string | null;
}

const initialState: BookState = {
  books: [],
  loading: false,
  error: null,
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    fetchBooksStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchBooksSuccess(state, action: PayloadAction<Book[]>) {
      state.books = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchBooksFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchBooksStart, fetchBooksSuccess, fetchBooksFailure } =
  bookSlice.actions;
export const selectBooks = (state: RootState) => state.bookReducer.books;
export const selectLoading = (state: RootState) => state.bookReducer.loading;
export const selectError = (state: RootState) => state.bookReducer.error;

// return a book by id
export const selectBookById = (state: RootState, bookId: number) => {
  return state.bookReducer.books.find((book) => book.id === bookId);
};

export const selectBooksByCategoryId = (
  state: RootState,
  categoryId: number
) => {
  return state.bookReducer.books.filter((book) => book.id === categoryId);
};
export default bookSlice.reducer;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchBooks = () => async (dispatch: any) => {
  dispatch(fetchBooksStart());

  try {
    const { data } = await client.query({
      query: BOOKS_QUERY,
    });
    dispatch(fetchBooksSuccess(data.books));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    dispatch(fetchBooksFailure(error.message));
  }
};
