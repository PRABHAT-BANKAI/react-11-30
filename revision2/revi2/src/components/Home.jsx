import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  // fetch data from API

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <div>
      <div>
        {data.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} height={"100px"} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <Link to={"/card/" + product.id}>
              <button>SHow single page</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
