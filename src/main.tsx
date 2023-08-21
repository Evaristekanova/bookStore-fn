import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./redux/store";
import AppWithNavbarAndFooter from "./components/AppWithFooterAndNavbar";
// import AppWithOnlyNavbar from "./components/AppWithOnlyNavbar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import "./index.css";
import Books from "./Pages/Books";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<AppWithNavbarAndFooter />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </Router>
    </ApolloProvider>
  </Provider>
);
