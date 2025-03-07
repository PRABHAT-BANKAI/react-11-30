import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  function handleDelete(id) {
    axios.delete("http://localhost:3000/product/" + id).then((res) => {
      console.log(res);
      alert("Product deleted successfully");
      window.location.reload();
    });

  }

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios.get("http://localhost:3000/product").then((res) => {
      console.log(res);
      setProducts(res.data);
    });
  }
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>
                  <button>Edit</button>
                  <button
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    Delete
                  </button>
                  <Link to={"/read/"+item.id}><button>Read</button></Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
