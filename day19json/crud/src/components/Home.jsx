import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  // const [category, setCategory] = useState("");

  function handleFilter(value) {
    let productData = products;
    console.log(value);
    if (value === "all") {
      axios.get("http://localhost:3000/product").then((res) => {
        setProducts(res.data);
      });
      return;
    }
    let filterData = productData.filter((prod) => prod.description === value);
    setProducts(filterData);
  }

  function handleSort() {
    let newSort = products.sort((a, b) => a.price - b.price);
    console.log(newSort);
    setProducts([...newSort]);
  }
  function handleSort2() {
    let newSort = products.sort((a, b) => b.price - a.price);
    console.log(newSort);
    setProducts([...newSort]);
  }

  function handleDelete(id) {
    axios
      .delete("http://localhost:3000/product/" + id)
      .then((res) => {
        console.log(res);
        alert("Product deleted successfully");
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
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
        <button>Create Product </button>
      </Link>
      <button onClick={handleSort}>low to high</button>
      <button onClick={handleSort2}>high to low</button>
      <select name="" id="" onChange={(e) => handleFilter(e.target.value)}>
        <option defaultValue={""}>Select Category</option>
        <option value="all">All</option>
        <option value="slipper">Slipper</option>
        <option value="shoes">Shoes</option>
        <option value="sandals">Sandals</option>
      </select>
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
                  <Link to={"/update/" + item.id}>
                    {" "}
                    <button>Edit</button>
                  </Link>
                  <button
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    Delete
                  </button>
                  <Link to={"/read/" + item.id}>
                    <button>Read</button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
