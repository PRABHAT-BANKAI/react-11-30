import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [product, setProduct] = useState([]);

  function handleDelete(id) {
    axios
      .delete("http://localhost:3008/products/" + id)
      .then((res) => {
        console.log(res);
        alert("data deleted successfully");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Fetch data from API
  useEffect(() => {
    axios
      .get("http://localhost:3008/products")
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
      <Link to={"/create"}>
        <button>create data</button>
      </Link>
      <div>
        {product.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button
              onClick={() => {
                handleDelete(product.id);
              }}
            >
              delete
            </button>
            <Link to={"/edit/"+product.id}>
            <button>Edit</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
