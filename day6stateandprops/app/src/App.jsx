import {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import User from "./components/User";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";
function App() {
  //top
  const [user, setUser] = useState({
    name: "prabh",
    age: 25,
    gender: "male",
    address: "delhi",
  }); //[value,setState function],, state management

  //hooks
  // examples of hooks
  // useState
  // useEffect
  // useReducer
  // useContext
  // useCallback
  // usememo

  // let user = {
  //   name: "prabh",
  //   age: 25,
  //   gender: "male",
  //   address: "delhi",
  // };

  return (
    //<></> react fragment
    <>
      <h1>show User</h1>
      <User data={user} />
      <button
        onClick={() => {
          setUser({ ...user, age: user.age + 1 });
        }}
      >
        {" "}
        change age
      </button>

      {/* // <Navbar/>
      <Section/>
      <Footer/> */}
      <Navbar />
      <Section />
      <Section />
      <Footer />
    </>
  );
}

export default App;
