import { signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, authProvider } from "./config/firebase";
import Home from "./components/Home";

const App = () => {
  const [name, setName] = useState(
    JSON.parse(localStorage.getItem("googleAuth")) || ""
  );
  const handleAuth = async () => {
    const data = await signInWithPopup(auth, authProvider);
    setName(data.user.displayName);
  };

  function handleLogout (){
    localStorage.removeItem("googleAuth");
    setName("");
  }

  useEffect(() => {
    localStorage.setItem("googleAuth", JSON.stringify(name));
  }, [name]);
  return (
    <div>{name ? <Home userName={name} handleLogout={handleLogout} /> : <button onClick={handleAuth}>Google</button>}</div>
  );
};

export default App;
