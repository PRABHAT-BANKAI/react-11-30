import React, { useEffect, useState } from "react";

const Todolist = () => {
  const [inputText, setInputText] = useState("");
  const [boolean, setBoolean] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const [todolist, setTodolist] = useState(
    JSON.parse(localStorage.getItem("todolist")) || []
  );

  function handleAdd() {
    setTodolist([...todolist, inputText]);
    setInputText("");
  }
  function handleUpdate() {
    let updateTodolist = todolist.map((todo, i) =>
      i == editIndex ? inputText : todo
    );
    setTodolist(updateTodolist);
    setBoolean(false);
  }

  function handleEdit(index) {
    setBoolean(true);
    setInputText(todolist[index]);
    setEditIndex(index);
  }
  function handleDelete(index) {
    //1
    let filterData = todolist.filter((item, i) => i != index);
    setTodolist(filterData);
  }
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todolist));
  }, [todolist]);
  console.log(todolist);
  return (
    <div>
      <h1>Todolist</h1>
      <input
        type="text"
        placeholder="Enter your task"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      {boolean ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleAdd}>Add</button>
      )}
      <div>
        {todolist.map((item, index) => (
          <div key={index}>
            <p>{item}</p>
            <button
              onClick={() => {
                handleDelete(index);
              }}
            >
              delete
            </button>
            <button
              onClick={() => {
                handleEdit(index);
              }}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todolist;
