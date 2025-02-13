import React, { useState } from "react";
import Darkmode from "../components/Darkmode";

const Home = () => {
  const [darkmode, setDarkMode] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
   
          setDarkMode(!darkmode);
        }}
      >
        Dark mode
      </button>
      <div style={{display:'flex', gap:"5px", flexWrap:'wrap'}}>
      <Darkmode darkmode={darkmode} />
      <Darkmode darkmode={darkmode} />
      <Darkmode darkmode={darkmode} />
      <Darkmode darkmode={darkmode} />
      </div>
 
    </div>
  );
};

export default Home;
