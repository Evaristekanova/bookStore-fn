import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Books from "../Pages/Books";
import SingleBook from "../Pages/SingleBook";

const AppWithNabar = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<SingleBook />} />
      </Routes>
    </>
  );
};

export default AppWithNabar;
