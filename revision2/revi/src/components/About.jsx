import axios from "axios";
import React, { useEffect, useState } from "react";

const About = () => {
  const [product, setProduct] = useState([]);

  // Fetch data from API
  useEffect(() => {
    axios
      .get("http://localhost:3004/products")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>About</h1>
      <div>
        {product.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
