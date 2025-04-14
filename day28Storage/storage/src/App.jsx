import { addDoc, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./config/firebase";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todolist, setTodolist] = useState([]);

  const database = collection(db, "todolists");

  const handleAdd = async () => {
    if (!inputText.trim()) {
      alert("Please enter a task");
      return;
    }

    try {
      await addDoc(database, { todo: inputText });
      alert("Task added successfully");
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
  console.log(todolist);

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
      <button onClick={handleAdd}>Add</button>
      <div>
        {todolist.length ==0? <h1>add you task</h1>:todolist.map((todo)=>{
        return (
          <div key={todo.id}>
            <h1>{todo.todo}</h1>
          </div>
        );
        })}
      </div>
    </div>
  );
};

export default App;
