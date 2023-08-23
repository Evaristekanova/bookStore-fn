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
import AppWithNabar from "./components/AppWithNabar";
import Dashboard from "./dashboard/Dashboard";
import "./index.css";

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
          <Route path="/*" element={<AppWithNabar />} />
          <Route path="/" element={<AppWithNavbarAndFooter />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </Router>
    </ApolloProvider>
  </Provider>
);
