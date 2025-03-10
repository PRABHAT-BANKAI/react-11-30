import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const { id } = useParams(); // get id from url
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (name == "" || description == "" || price == "") {
      alert("Please Enter all fields");
      return;
    }
    let object = { name, description, price };

    // {
    //   name: name,
    //   description:description,
    //   price: price,
    // }

    // console.log(object);

    axios
      .put("http://localhost:3000/product/" + id, object)
      .then((res) => {
        console.log(res);
        alert("product updated successfully");
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => {
    axios
      .get("http://localhost:3000/product/" + id)
      .then((res) => {
        setName(res.data.name);
        setDescription(res.data.description);
        setPrice(res.data.price);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  return (
    <div>
      <h1>Update Data</h1>
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

export default Update;
