import { Link } from "react-router-dom";
import { AiFillDashboard, AiFillBook } from "react-icons/ai";
import { HiUsers, HiUser } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="md:flex flex-col w-64 h-screen px-4 py-8 bg-lightGreen border-r ">
      <div className="flex flex-col items-center mt-6 -mx-2">
        <HiUser className="w-24 h-24 mx-2 rounded-full" />
        <h4 className="mx-2 mt-2 font-medium text-xl text-white">
          Admin Dashboard
        </h4>
      </div>
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="text-xl">
          <Link
            to="/dashboard"
            className="mt-2 flex px-4 py-2 text-gray-900 font-semibold  rounded-lg hover:bg-gray-100 hover:text-lightGreen"
          >
            <AiFillDashboard className="w-5 h-5 mr-2 mt-1" />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/dashboard/books"
            className="mt-2 flex px-4 py-2 text-gray-900 font-semibold  rounded-lg hover:bg-gray-100 hover:text-lightGreen"
          >
            <AiFillBook className="w-5 h-5 mr-2 mt-1" />
            <span>Books</span>
          </Link>
          <Link
            to="/dashboard/users"
            className="mt-2 flex px-4 py-2 text-gray-900 font-semibold rounded-lg hover:bg-gray-100 hover:text-lightGreen"
          >
            <HiUsers className="w-5 h-5 mr-2 mt-1" />
            <span>Users</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
