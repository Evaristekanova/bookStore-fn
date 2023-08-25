import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import InputField from "./InputField";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const links = [
    {
      name: "Books",
      path: "/books",
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

  const handleSearchButtonClick = () => {
    setIsSearchVisible(!isSearchVisible);
    if (!isSearchVisible && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
        <div className="mx-16">
          <Link to="/dashboard">
            <span className="font-semibold text-xl text-lightGreen">Lo</span>
            <span className="font-semibold text-xl">go</span>
          </Link>
        </div>
        <div className="flex md:order-2 outline-none">
          <button
            type="button"
            onClick={handleSearchButtonClick}
            className="md:hidden text-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-1"
          >
            <FaSearch className="w-5 h-5 text-lightGreen" />
            <span className="sr-only">Search</span>
          </button>
          {isSearchVisible && (
            <input
              ref={searchInputRef}
              type="text"
              id="search-navbar"
              className="absolute right-[2rem] top-full md:hidden block w-[15rem] p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none z-10"
              placeholder="Search..."
              value=""
            />
          )}
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaSearch className="w-4 h-4 text-lightGreen" />
              <span className="sr-only">Search icon</span>
            </div>
            <InputField
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
              placeholder="Search..."
              value=""
            />
          </div>
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
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaSearch className="w-4 h-4 text-lightGreen dark:text-gray-400" />
            </div>
            <InputField
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
              placeholder="Search..."
              value=""
            />
          </div>
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
