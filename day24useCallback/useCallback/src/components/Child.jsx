import React, { memo } from "react";

const Child = ({ countInc }) => {
  console.log("child rendering");
  return (
    <div>
      <button onClick={countInc}>Count 2 Inc</button>
    </div>
  );
};

export default memo(Child);
