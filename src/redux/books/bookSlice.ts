import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { BOOKS_QUERY } from "../../graphql/BOOKS_QUERY";
import { client } from "../../main";

export interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  categoryId: number;
  cloudinaryId: string;
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
export default bookSlice.reducer;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchBooks = () => async (dispatch: any) => {
  dispatch(fetchBooksStart());

  try {
    const { data } = await client.query({
      query: BOOKS_QUERY,
    });
      console.log(data);
    dispatch(fetchBooksSuccess(data.books));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    dispatch(fetchBooksFailure(error.message));
  }
};
