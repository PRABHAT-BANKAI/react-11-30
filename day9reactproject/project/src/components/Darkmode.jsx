import React, { useState } from "react";
import reactLogo from "../assets/react.svg";
const Darkmode = ({darkmode}) => {

  return (
    <div>
     
      <div
        className={darkmode ? "dark" : "light"}
        style={{ height: "200px", width: "200px", border: "1px solid black" }}
      >
        <img src={reactLogo} alt="" />
        <h2>React</h2>
        <p>
          React is a JavaScript library for building user interfaces. It lets
          you create reusable UI components, manage state, and handle user
          events.
        </p>
      </div>
    </div>
  );
};

export default Darkmode;
