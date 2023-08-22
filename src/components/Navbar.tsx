import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      name: "Login",
      path: "/login",
    },
    {
      name: "Register",
      path: "/register",
    },
  ];
  return (
    <div className="flex items-center h-20 border shadow-md justify-between sticky top-0 z-20 bg-white">
      <div className="mx-16">
        <Link to='/'>
          <span className="font-semibold text-xl text-lightGreen">Lo</span>
          <span className="font-semibold text-xl ">go</span>
        </Link>
      </div>
      <Link to="/books">Books</Link>
      <div className="md:flex md:ml-[7rem] md:w-[28%] md:border md:py-1 md:px-2 md:rounded-md lg:flex lg:ml-[18rem] lg:w-[28%] lg:border lg:py-1 lg:px-2 lg:rounded-md sm:hidden hidden">
        <input
          type="text"
          className="w-full h-full outline-none py-1"
          placeholder="Search for books"
        />
        <button className="py-1 px-2 bg-lightGreen rounded-sm text-white font-light">
          Search
        </button>
      </div>
      <div className="flex justify-around mr-20">
        {links.map((link) => (
          <Link to={link.path} key={link.name} className="text-center ml-6">
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
