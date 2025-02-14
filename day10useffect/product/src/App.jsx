import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  const [productData, setProductData] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useeffect call");
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((res) => {
        // setProductData(res)
        setProductData(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },[] ); //[] // [value]
  return (
    <>
      <h1>Product Page</h1>
      <h2>choose your product </h2>
      <h3>Count:{count}</h3>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
        {productData && productData.map((product) => {// condition rendering 
          return (
            <ProductCard
              key={product.id}
              title={product.title}
              category={product.category}
              price={product.price}
              description={product.description.split("").slice(0, 60).join("")}
              image={product.image}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
