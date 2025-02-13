import React from "react";

const ProductCard = ({ title, price, desc, image, category }) => {
  return (
    <div style={{ height: "200px", width: "200px", border: "1px solid black" }}>
      <h3>{title}</h3>
      <p>{price}</p>
      <p>{desc}</p>
      <img src={image} alt={title} />
      <p>{category}</p>
    </div>
  );
};

export default ProductCard;
