import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (name == "" || description == "" || price == "") {
      alert("Please Enter all fields");
      return;
    }
    let object = { name, description, price };

    // console.log(object);

    axios
      .post("http://localhost:3000/product", object)
      .then((res) => {
        console.log(res);
        alert("product added successfully");
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  }
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          placeholder="Enter product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="enter product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter your product price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Create;
