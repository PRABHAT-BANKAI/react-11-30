import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, update } from "./redux/features/todoSlice";

const App = () => {
  const [input, setInput] = useState("");
  const [boolean, setBoolean] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const todoData = useSelector((state) => state.todolist.todos);
  const dispatch = useDispatch();

  function handleUpdate() {
    dispatch(update({ editIndex, input }));
    setBoolean(false);
    setInput("");
  }

  function handleEdit(index) {
    setInput(todoData[index]);
    setBoolean(true);
    setEditIndex(index);
  }
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
      {boolean ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleAdd}>Add todolist </button>
      )}

      <div>
        {todoData.map((todo, i) => {
          return (
            <div key={i}>
              <p>{todo}</p>
              <button onClick={() => dispatch(deleteTodo(i))}>delete</button>
              <button
                onClick={() => {
                  handleEdit(i);
                }}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
