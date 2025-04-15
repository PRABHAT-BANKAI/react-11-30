import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./config/firebase";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todolist, setTodolist] = useState([]);
  const [boolean, setBoolean] = useState(false);
  const [editID, setEditID] = useState(null);

  const database = collection(db, "todolists");

  const handleAdd = async () => {
    if (!inputText.trim()) {
      alert("Please enter a task");
      return;
    }

    try {
      await addDoc(database, { todo: inputText });
      alert("Task added successfully");
      getData();
    } catch (error) {
      console.log(error);
      alert("Error adding task");
    }
    setInputText("");
  };

  async function getData() {
    const todoData = await getDocs(database);
    console.log(todoData);
    setTodolist(
      todoData.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    );
  }
  const handleDelete = async (id) => {
    let DeleteData = doc(database, id);
    await deleteDoc(DeleteData);
    alert("Task deleted successfully");
    getData();
  };
  const handleEdit = async (data) => {
    setInputText(data.todo)
    setBoolean(true);
    setEditID(data.id);
  }
  const handleUpdate = async ()=>{
    if(!inputText.trim()){
      alert("Please enter a task");
      return;
    }
    let updateValue = doc(database, editID);
    await updateDoc(updateValue,{todo:inputText})
    alert("Task updated successfully");
    setInputText("");
    setBoolean(false);
    getData();
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Todolist with firebase Store</h1>
      <input
        type="text"
        placeholder="Enter your task"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      {boolean ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleAdd}>Add</button>
      )}
      <div>
        {todolist.length == 0 ? (
          <h1>add you task</h1>
        ) : (
          todolist.map((todo) => {
            return (
              <div key={todo.id}>
                <h1>{todo.todo}</h1>
                <button
                  onClick={() => {
                    handleDelete(todo.id);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    handleEdit(todo);
                  }}
                >
                  Edit
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default App;
