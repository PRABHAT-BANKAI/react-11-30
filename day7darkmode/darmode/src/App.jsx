import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div
        className="container"
        style={{
          height: "500px",
          width: "500px",
          border: "1px solid black",
          backgroundColor: darkMode ? "black" : "white",
          color: darkMode ? "white" : "black",
        }}
      >
        <p>hello from react </p>
      </div>
      <button
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        darkmode
      </button>
    </>
  );
}

export default App;
