import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/contact";
import { Link, Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Create from "./components/Create";
import Update from "./components/Update";

const App = () => {
  return (
    <div>
      <nav>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            justifyContent: "space-around",
            backgroundColor: "aqua",
          }}
        >
          <Link to={"/"}>
            <li>home</li>
          </Link>
          <Link to={"/about"}>
            {" "}
            <li>about</li>
          </Link>
          <Link to={"/contact"}>
            <li>contact</li>
          </Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact/:number" element={<Contact />} />
        <Route path="/card/:id" element={<Card />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update/>}/>
      </Routes>
    </div>
  );
};

export default App;
