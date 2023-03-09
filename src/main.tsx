import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./contexts/appcontext/AppProvider";
import store from "./store/store";
import { App } from "./App";
import "./index.css";
import "animate.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProvider>
        <App />
      </AppProvider>
    </Provider>
  </React.StrictMode>
);
