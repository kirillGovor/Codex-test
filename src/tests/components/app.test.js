/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
import React from "react";
import ReactDOM from "react-dom";
import App from "../../App";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });