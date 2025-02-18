import { useEffect, useRef, useState } from "react";

const App = () => {
  const [list, setList] = useState([]);
  const input = useRef("");

  function handleList() {
    // console.log(input.current.);
    setInterval(() => {
      input.current.value += 1;
    }, 1000);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setList(data);
      });
  }

  return (
    <div>
      <input ref={input} type="text" />
      <p>{input.current.value}</p>
      <button onClick={handleList}> fetch list</button>
      <ul>
        {list.map((data) => (
          <li key={data.id}>{data.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
