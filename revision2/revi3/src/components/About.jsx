import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [product, setProduct] = useState([]);

  function handleDelete(id) {
    axios
      .delete("http://localhost:3010/products/" + id)
      .then((res) => {
        console.log(res);
        alert("Product deleted");
        // window.location.reload(); cheating

        let filter = product.filter((element) => element.id !== id);
        setProduct(filter);
      })
      .catch((err) => {
        console.log(err);
        alert("Error deleting product");
      });
  }

  // Fetch data from API
  useEffect(() => {
    axios
      .get("http://localhost:3010/products")
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
        {" "}
        <button>Create Data</button>
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
            <Link to={"/update/" + product.id}>
              <button>edit</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
