import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (name == "" && price == "") {
      alert("Please fill all fields");
      return;
    }

    axios
      .post("http://localhost:3010/products", { name, price })
      .then((res) => {
        console.log(res);
        alert("your product added successfully");
        setName("");
        setPrice("");
        navigate("/about");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to add product");
      });
  }
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          placeholder="Enter your product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter your product price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button>Add data</button>
      </form>
    </div>
  );
};

export default Create;
