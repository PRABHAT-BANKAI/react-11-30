import axios from "axios";
import React, { useState } from "react";

const Create = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setPrice(Number(price));

    axios
      .post("http://localhost:3008/products", { name, price })
      .then((res) => {
        console.log(res);
        alert("your data added successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("error in adding data");
      });
    setName("");
    setPrice("");
  }
  return (
    <div>
      <h1>create data</h1>
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          placeholder="enter your product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="enter your price "
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button>add data</button>
      </form>
    </div>
  );
};

export default Create;
