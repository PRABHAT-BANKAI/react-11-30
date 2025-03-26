import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { userContext } from "./context/context.js";

let userData = {
  name: "John Doe",
  email: "johndoe@example.com",
  password: "12345",
};

createRoot(document.getElementById("root")).render(
  <userContext.Provider value={userData}>
    <App />
  </userContext.Provider>
);
