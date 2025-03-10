import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState({});
  const {id} = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }
  useEffect(() => {
    axios.get("http://localhost:3000/product/" + id).then((res) => {
      setData(res.data);
      console.log(res.data);
    }).catch((err) => {
      alert(err);
      navigate(-1); // Redirect to Home page if data fetch fails.
    })
  }, []);
  return (
    <div>
      <h2>Name: {data.name}</h2>
      <h3>Description: {data.description}</h3>
      <p>Price: {data.price}</p>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default Read;
