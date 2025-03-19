import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount } from "../redux/features/counterSlice";

const Child = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count :{count}</h1>
      <button onClick={() => dispatch(incrementByAmount(50))}>
        Inc by amount 50
      </button>
    </div>
  );
};

export default Child;
