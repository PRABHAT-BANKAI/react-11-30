import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/product").then((res) => {
      console.log(res);
      setProducts(res.data);
    });
  }, []);
  return (
    <div>
      <Link to={"/createProduct"}>
        {" "}
        <button>Create Product </button>
      </Link>
      <table border={""}>
        <thead>
          <tr>
            <th>Name</th>
            <th>description</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.desc}</td>
                <td>{item.price}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
