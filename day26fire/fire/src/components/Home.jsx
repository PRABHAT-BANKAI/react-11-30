import React from "react";

const Home = ({ userName, handleLogout }) => {
  return (
    <div>
      <h1>Welcome {userName}</h1>
      <p>You are logged in using Google OAuth.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
