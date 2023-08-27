import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Users from "./Users";
import BooksDash from "./BooksDash";

const DashboardIndex = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className=" ml-0 flex justify-items-end flex-col md:flex-row border-red-400 relative">
        {isSidebarOpen ? (
          <AiFillCloseCircle
            onClick={handleSidebarOpen}
            className="absolute right-0 top-0 m-4 text-2xl text-lightGreen cursor-pointer w-7 h-7"
          />
        ) : (
          <FaBars
            onClick={handleSidebarOpen}
            className="block md:hidden absolute right-0 top-0 m-4 text-2xl text-lightGreen cursor-pointer w-7 h-7"
          />
        )}
        <div
          className={`block md:block left-0 top-0 absolute z-10 duration-500 transition-all ${
            isSidebarOpen ? "left-0" : "-left-full md:left-0"
          }
        }`}
        >
          <Sidebar />
        </div>
        {/* {isSidebarOpen ? (
          <div className="">
            <Sidebar />
          </div>
        ) : (
          <div className="hidden md:block">
            <Sidebar />
          </div>
        )} */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/books" element={<BooksDash />} />
        </Routes>
      </div>
    </>
  );
};

export default DashboardIndex;
