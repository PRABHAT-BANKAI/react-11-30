import { useState } from "react";

import viteLogo from "/vite.svg";
import "./App.css";
import Extra from "./components/extra";
import Home from "./Pages/Home";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      {/* <Extra /> */}
      <Home/>
      <ProductCard
        title={"nike"}
        price={"2000"}
        category={"shoes"}
        desc={"asl;dkjfa;slkjdf"}
        image={viteLogo}
      />
      <ProductCard
        title={"adidas"}
        price={"1500"}
        category={"jeans"}
        desc={"asdlkjfa;slkjdf"}
        image={viteLogo}
      />
      <ProductCard
        title={"puma"}
        price={"1000"}
        category={"shirts"}
        desc={"asdlkjfa;slkjdf"}
        image={viteLogo}
      />
      <ProductCard
        title={"rebook"}
        price={"1200"}
        category={"books"}
        desc={"asdlkjfa;slkjdf"}
        image={viteLogo}
      />
    </>
  );
}

export default App;
