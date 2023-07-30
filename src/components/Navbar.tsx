import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center h-20 border shadow-md justify-between">
      <div className="mx-16">Logo</div>
      <div className="flex ml-[20rem] w-[28%] border py-1 px-2 rounded-md">
        <input
          type="text"
          className="w-full h-full outline-none py-1"
          placeholder="Search for books"
        />
        <button className="py-1 px-2 bg-green-900 rounded-sm text-white font-light">
          Search
        </button>
      </div>
      <div className="flex justify-around mr-20">
        <Link to="/login" className="text-center mr-4">
          Login
        </Link>
        <Link to="/register" className="text-center ml-4">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
