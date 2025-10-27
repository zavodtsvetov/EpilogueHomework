import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./components/store.js";
import App from "./App.jsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
