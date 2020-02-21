import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import UseRef from "./Handson/UseRef";
import UseState from "./Handson/UseState";

const rootElement = document.getElementById("root");
ReactDOM.render(<UseState />, document.getElementById("usestate"));
ReactDOM.render(<UseRef />, document.getElementById("useref"));
ReactDOM.render(<App />, rootElement);
