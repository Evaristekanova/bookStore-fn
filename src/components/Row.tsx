import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Loading from "../Pages/Loading";
import {
  selectUsers,
  fetchUsers,
  selectUsersLoading,
  selectUsersError,
} from "../redux/users/userSlice";
import Cell from "./Cell";

const Row = () => {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectUsersLoading);
  const error = useAppSelector(selectUsersError);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>{"error: Reload the page please"}</div>;
  }
  return (
    <>
      {users.map((user) => (
        <tr key={user.id}>
          <Cell
            id={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
            role={user.role}
          />
        </tr>
      ))}
    </>
  );
};

export default Row;
