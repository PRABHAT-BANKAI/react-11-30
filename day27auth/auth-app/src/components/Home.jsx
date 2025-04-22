import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function handleLogout() {
    signOut(auth)
      .then((res) => {
        console.log(res);
        alert("user logout successfully");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        alert("error while logout");
        
      });
  }
  return (
    <div>
      <h1>Home page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
