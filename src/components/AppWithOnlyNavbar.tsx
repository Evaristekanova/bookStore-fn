import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Books from "../Pages/Books";

const AppWithOnlyNavbar = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/books" element={<Books />} />
    </Routes>
  </>
);

export default AppWithOnlyNavbar;
