import React from "react";
import { render } from "react-dom";
import Search from "./Search";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Search />
    </div>
  );
};

render(<App />, document.getElementById("root"));
