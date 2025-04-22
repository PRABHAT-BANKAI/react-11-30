import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();// prevent page to refresh
    createUserWithEmailAndPassword(auth, email, password)// return promise // promise return 3 states pending, fulfilled, rejected
      .then((res) => {
        console.log(res);
        alert("user Signup successfully");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
    setEmail("");
    setPassword("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
