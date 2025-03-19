import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counterSlice";
import Child from "./components/Child";

const App = () => {
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Count:{countValue} </p>
      <button onClick={() => dispatch(increment())}>inc</button>
      <button onClick={() => dispatch(decrement())}>dec</button>
      <Child  />
    </div>
  );
};

export default App;
