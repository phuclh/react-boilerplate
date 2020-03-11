import React from "react";
import { Router, Link } from "@reach/router";
import { render } from "react-dom";
import Search from "./Search";
import Detail from "./Detail";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        <Search path="/" />
        <Detail path="details/:id" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
