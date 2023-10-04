import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraBaseProvider } from "@chakra-ui/react";
import store from "./store/index"
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    <ChakraBaseProvider>
      <Provider store={store}>

      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>

    </ChakraBaseProvider>  

  </React.StrictMode>
);

