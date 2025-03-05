import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const [singleData, setSingleData] = useState();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/" + id).then((res) => {
      setSingleData(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <>
      {singleData && (
        <div>
          <p>Title: {singleData.title}</p>
          <img src={singleData.image} alt="" className="h-60" />
          <p>Price: {singleData.price}</p>
          <p>Description: {singleData.description.slice(0,24)}</p>
          <button>Buy Now</button>
        </div>
      )}
    </>
  );
};

export default SinglePage;
