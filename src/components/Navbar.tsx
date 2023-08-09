import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center h-20 border shadow-md justify-between sticky top-0 z-20 bg-white">
      <div className="mx-16">Logo</div>
      <Link to="/books">Books</Link>
      <div className="flex ml-[20rem] w-[28%] border py-1 px-2 rounded-md">
        <input
          type="text"
          className="w-full h-full outline-none py-1"
          placeholder="Search for books"
        />
        <button className="py-1 px-2 bg-green-700 hover:bg-green-500 rounded-sm text-white font-light">
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
