import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppWithNavbarAndFooter from "./components/AppWithFooterAndNavbar";
import AppWithOnlyNavbar from "./components/AppWithOnlyNavbar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import "./index.css";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<AppWithNavbarAndFooter />} />
        <Route path="/books" element={<AppWithOnlyNavbar />} />
      </Routes>
    </Router>
  </ApolloProvider>
);
