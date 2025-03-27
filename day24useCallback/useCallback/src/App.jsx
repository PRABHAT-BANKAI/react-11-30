import React, { useCallback, useMemo, useState } from "react";
import Child from "./components/Child";

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const countInc = useCallback(() => {
    console.log("count2 call");
    setCount2(count2 + 1);
    
  }, [count2]);

  console.log("rendering 1");
  return (
    <div>
      <h1>useCallback</h1>

      <p>Count 1: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment Count 1</button>

      <p>Count2 :{count2}</p>
      <Child countInc={countInc} />
    </div>
  );
};

export default App;
