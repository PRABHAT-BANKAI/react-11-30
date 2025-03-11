import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Card = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} height={"100px"} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={handleBack}>back</button>
    </div>
  );
};

export default Card;
