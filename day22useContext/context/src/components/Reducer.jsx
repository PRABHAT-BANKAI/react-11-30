import React, { useReducer } from "react";

const ReducerCom = () => {
  const initialState = { count: 0 };

  const [state, disptach] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      default:
        return state;
    }
  }
  return <div>
    <p>count:{state.count}</p>
    <button onClick={() => disptach({ type: "INCREMENT" })}>Increment</button>
    <button onClick={() => disptach({ type: "DECREMENT" })}>Decrement</button>
  </div>;
};

export default ReducerCom;
