import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Loading from "../Pages/Loading";
import {
  selectUsers,
  fetchUsers,
  selectUsersLoading,
  selectUsersError,
} from "../redux/users/userSlice";
import Row from "./Row";

const Table = () => {
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
    <table className="w-full border-collapse">
      <tbody className="w-screen border">
        <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal w-full">
          <tr className="border-b border-gray-300">
            <th className="py-3 px-4 font-semibold text-left">ID</th>
            <th className="py-3 px-4 font-semibold text-left">First Name</th>
            <th className="py-3 px-4 font-semibold text-left">Last Name</th>
            <th className="py-3 px-4 font-semibold text-left">Email</th>
            <th className="py-3 px-4 font-semibold text-left">Role</th>
          </tr>
        </thead>
        <Row users={users} />
      </tbody>
    </table>
  );
};

export default Table;
