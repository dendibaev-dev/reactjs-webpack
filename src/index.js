import React from "react";
import { render } from "react-dom";
import "@babel/polyfill";
import "./scss/index.scss";
import App from "./App.jsx";

render(<App />, document.getElementById("app"));
