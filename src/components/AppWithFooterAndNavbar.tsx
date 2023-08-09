import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import App from "../App";

const AppWithNavbarAndFooter = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
    <Footer />
  </>
);

export default AppWithNavbarAndFooter;
