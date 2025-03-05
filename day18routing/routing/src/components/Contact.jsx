import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Contact</h1>
      <div style={{ display: "flex" ,flexWrap:"wrap"}}>
        {data &&
          data.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid black",
                margin: "10px",
                padding: "10px",
                width: "300px",
                height: "300px",
              }}
            >
              <img style={{width:"100px"}} src={product.image} alt={product.title}  />
              <h2>{product.title}</h2>
              <p>{product.description.slice(0, 45)}</p>

              <h3>${product.price}</h3>
              <button>Add to Cart</button>
             <Link to={`/product/${product.id}`}> <button className="border">Single page show Product</button></Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Contact;
