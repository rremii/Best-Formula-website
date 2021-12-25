import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import store from "./Redux/ReduxStore";
import { Provider } from "react-redux";
import { MathJax, MathJaxContext } from "better-react-mathjax";
ReactDOM.render(
  <BrowserRouter>
    {/*<React.StrictMode>*/}
    <Provider store={store}>
      <App />
    </Provider>
    {/*</React.StrictMode>*/}
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
