import React from "react";

const Home = () => {
  const userName = JSON.parse(localStorage.getItem("googleAuth"));
  console.log(userName);
  return (
    <div>
      <h1>Welcome {userName}</h1>
      <p>You are logged in using Google OAuth.</p>
      <button onClick={() => localStorage.removeItem("googleAuth")}>
        Logout
      </button>
    </div>
  );
};

export default Home;
