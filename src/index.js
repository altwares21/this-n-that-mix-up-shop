import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store"; // Import the Redux store
import App from "./App";
import "./styles/tailwind.css";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);