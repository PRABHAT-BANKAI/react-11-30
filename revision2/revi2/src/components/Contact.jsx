import React from "react";
import { useParams } from "react-router-dom";

const Contact = () => {
  const {number} = useParams();
  //{number:"123545"}
 
  return <div>
    <h1>Contact</h1>
    <p>{number}</p>
  </div>;
};

export default Contact;
