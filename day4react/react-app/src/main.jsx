// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import App from "./App.jsx";

const element = <h2>hello world</h2>;
createRoot(document.getElementById("root")).render(
<App/>
);
