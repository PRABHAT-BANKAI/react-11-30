import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
createRoot(document.getElementById("root")).render(
  // 2step get store from store.js
  <Provider store={store}>
    <App />
  </Provider>
);
