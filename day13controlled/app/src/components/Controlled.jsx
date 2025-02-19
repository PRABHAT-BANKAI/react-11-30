import React, { useState } from "react";

const Controlled = () => {
  const [name, setName] = useState(""); //[value,function]
  return (
    <div>
      <h1>Controlled component</h1>
      <input
        type="text"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <p>{name}</p>
    </div>
  );
};

export default Controlled;
