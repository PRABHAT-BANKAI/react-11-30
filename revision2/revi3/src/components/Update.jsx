import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (name == "" && price == "") {
      alert("Please fill all fields");
      return;
    }

    axios
      .put("http://localhost:3010/products/" + id, { name, price })
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

  useEffect(() => {
    axios
      .get("http://localhost:3010/products/" + id)
      .then((res) => {
        setName(res.data.name);
        setPrice(res.data.price);
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to fetch product");
      });
  }, []);
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
        <button>Update data</button>
      </form>
    </div>
  );
};

export default Update;
