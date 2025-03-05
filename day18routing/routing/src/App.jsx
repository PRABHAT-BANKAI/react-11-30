import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Link, Route, Routes } from "react-router-dom";
import SinglePage from "./components/SinglePage";
const App = () => {
  let name = "batman";
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about/123456"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
      {/* 2nd step import routes from "react-router-dom"; */}
      <Routes>
        {/* 3rd step put Route in Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about/:num" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<SinglePage />} />
      </Routes>
    </>
  );
};

export default App;
