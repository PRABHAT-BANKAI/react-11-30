import React, { memo, useMemo } from "react";
import { useState } from "react";

const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [count, setCount] = useState(0);

  console.log("rendering");
  const sum = useMemo(() => {
    console.log("sum");
    return Number(num1) + Number(num2);
  },[ num1,num2]);
  return (
    <div>
      <h1>use Memo</h1>

      <input
        type="text"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />

      <input
        type="text"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />

      <p>Sum:{sum}</p>

      <p>count:{count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
};

export default App;
