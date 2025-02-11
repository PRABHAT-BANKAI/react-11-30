import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Pages/Home";

function App() {
  const [product, setProduct] = useState();
  console.log(product); //[]

  console.log("1");
  //side effect
  useEffect(() => {
    // console.log("useEffect");
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((res) => {
        // console.log(res);
        setProduct(res);
        console.log(product); //[]
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("finally");
      });
  }, []);

  console.log("2");

  return (
    <>
      <h1>hello</h1>
      /* <Home /> */
      {product &&product.map((item) => {
        return (
          <div>
            <h1>{item.title}</h1>
            <p>{item.price}</p>
            <img src={item.image} alt="" height={"100px"} />
          </div>
        );
      })}
    </>
  );
}

export default App;
