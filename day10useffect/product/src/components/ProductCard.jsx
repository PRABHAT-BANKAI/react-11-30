import React from "react";

const ProductCard = ({ title, image, description, price, category }) => {
  return (
    <div style={{ width: "300px", height: "400px", border: "1px solid black" }}>
      <img src={image} alt={title} height={"100px"} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>Category: {category}</p>
      <button>Add to Cart</button>
      <button>View Details</button>
    </div>
  );
};

export default ProductCard;
