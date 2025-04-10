import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <nav
        style={{
          height: "70px",
          backgroundColor: "aqua",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to={"/home"}>
          <button>Home</button>
        </Link>
        <Link to={"/"}>
          <button>SignUp</button>
        </Link>
        <Link to={"/login"}>
          <button>Login</button>
        </Link>
      </nav>
      <Routes>
        <Route path={"/home"} element={<Home />} />
        <Route path={"/"} element={<SignUp />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
