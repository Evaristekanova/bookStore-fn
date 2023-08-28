import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const links = [
    {
      name: "Books",
      path: "/books",
    },
    {
      name: "favorites",
      path: "/favorites",
    },
    {
      name: "Login",
      path: "/login",
    },
    {
      name: "Register",
      path: "/register",
    },
  ];

  useEffect(() => {
    let timeoutId: number | null = null;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLDivElement).contains(event.target as Node)
      ) {
        timeoutId = window.setTimeout(() => {
          setIsDropdownOpen(false);
        }, 100);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <nav className="bg-white border-gray-200 w-full">
      <div className="flex items-center justify-between p-4 w-screen relative">
        <div className="mx-10">
          <Link to="/dashboard">
            <span className="font-semibold text-xl text-lightGreen">Lo</span>
            <span className="font-semibold text-xl">go</span>
          </Link>
        </div>
        <div className="flex md:order-2 outline-none">
          {isDropdownOpen ? (
            <AiFillCloseCircle
              className="block md:hidden w-7 h-7 text-lightGreen"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
          ) : (
            <FaBars
              className="block md:hidden w-7 h-7 text-lightGreen"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
          )}
          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="md:hidden absolute right-0 top-full w-[15rem] mt-2 bg-white border border-gray-100 rounded-lg shadow-lg z-10"
            >
              <ul className="py-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100 text-center hover:text-lightGreen"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="block px-4 py-2 text-gray-900 rounded-lg hover:bg-gray-100 hover:text-lightGreen"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
