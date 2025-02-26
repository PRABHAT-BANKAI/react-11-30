import React from "react";

const DisplayData = ({ data }) => {
  return (
    <div>
      {data && data.map((item) => (
        <p className="text-[45px] text-green-400">{item}</p>
      ))}
    </div>
  );
};

export default DisplayData;
