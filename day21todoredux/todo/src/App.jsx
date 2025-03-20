import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./redux/features/todoSlice";

const App = () => {
  const [input, setInput] = useState("");
  const todoData = useSelector((state) => state.todolist.todos);
  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(addTodo(input));
    setInput("");
  }
  return (
    <div>
      <h1>Todolist</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add todolist </button>
      <div>
        {todoData.map((todo,i) => {
          return (
            <div key={i}>
              <p>{todo}</p>
              <button onClick={()=>dispatch(deleteTodo(i))}>delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
