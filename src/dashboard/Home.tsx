import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectUsers, fetchUsers, User} from "../redux/users/userSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  console.log(users);

  return (
    <div className="px-6">
      {users.map((user: User) => (
        <div key={user.id}>
          <p>{user.firstName}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
