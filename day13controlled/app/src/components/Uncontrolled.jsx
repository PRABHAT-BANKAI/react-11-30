import React, { useRef } from "react";

const Uncontrolled = () => {
  const inputRef = useRef("");

  function handleShow(){
    console.log(inputRef.current.value);
  }
  return (
    <div>
      <h1>Uncontrolled component</h1>
      <input ref={inputRef} type="text" />
      <button onClick={handleShow}>show Name</button>
      <p>{inputRef.current.value}</p>
    </div>
  );
};

export default Uncontrolled;
