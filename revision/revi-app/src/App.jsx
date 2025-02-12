import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Pages/Home";


// didmount []
//  updatemount [value]
// unmount // cleanup function

function App() {
  const [product, setProduct] = useState();
  const [count, setCount] = useState(0);
  console.log(product); //[]

  console.log("1");
  //side effect
  useEffect(() => {
    console.log("useEffect");
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

      return () => {
        console.log("cleanup");
      };
  }, [count]);

  console.log("2");

  return (
    <>
      <h1>hello</h1>
      /* <Home /> */
      {product &&product.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.price}</p>
            <img src={item.image} alt="" height={"100px"} />
          </div>
        );
      })}
      <button onClick={()=>{setCount(count+1)}}>{count}</button>
    </>
  );
}

export default App;
