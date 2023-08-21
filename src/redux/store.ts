import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./books/bookSlice";
import userReducer from "./users/userSlice";

export const store = configureStore({
    reducer: {
        bookReducer,
        userReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
