import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import UseRef from "./Handson/UseRef";

const rootElement = document.getElementById("root");
ReactDOM.render(<UseRef />, document.getElementById("useref"));
ReactDOM.render(<App />, rootElement);
