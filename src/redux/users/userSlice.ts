import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { client } from "../../main";
import { USERS_QUERY } from "../../graphql/USERS_QUERY";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsersStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchUsersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } =
  userSlice.actions;
export const selectUsers = (state: RootState) => state.userReducer.users;
export const selectUsersLoading = (state: RootState) =>
  state.userReducer.loading;
export const selectUsersError = (state: RootState) => state.userReducer.error;
export const selectUserById = (state: RootState, userId: number) =>
  state.userReducer.users.find((user) => user.id === userId);

export default userSlice.reducer;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchUsers = () => async (dispatch: any) => {
  try {
    dispatch(fetchUsersStart());
    const { data } = await client.query({
      query: USERS_QUERY,
    });
    console.log("users", data);

    dispatch(fetchUsersSuccess(data.users));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    dispatch(fetchUsersFailure(error.message));
  }
};
