import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import Books from "./Pages/Books.tsx";
import Login from "./Pages/Login.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/books" Component={Books} />
        <Route path="/login" Component={Login} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
