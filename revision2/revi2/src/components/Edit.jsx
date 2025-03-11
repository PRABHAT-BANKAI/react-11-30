import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  function handleSubmit(e) {
    e.preventDefault();

    setPrice(Number(price));

    axios
      .put("http://localhost:3008/products/" + id, { name, price })
      .then((res) => {
        console.log(res);
        alert("your data update successfully");
        navigate("/about");
      })
      .catch((error) => {
        console.log(error);
        alert("error in update data");
      });
    setName("");
    setPrice("");
  }

  useEffect(() => {
    axios.get("http://localhost:3008/products/" + id).then((res) => {
      setName(res.data.name);
      setPrice(res.data.price);
    });
  }, []);
  return (
    <div>
      <h1>Edit data</h1>
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
        <button>Update data</button>
      </form>
    </div>
  );
};

export default Edit;
