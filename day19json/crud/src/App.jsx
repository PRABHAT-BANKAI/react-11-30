import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createProduct" element={<Create />} />
        <Route path="/read/:id" element={<Read />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
};

export default App;
