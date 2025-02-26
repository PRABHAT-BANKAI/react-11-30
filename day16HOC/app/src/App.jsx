import React, { useEffect, useState } from "react";
import HOC from "./components/HOC";
import DisplayData from "./components/DisplayData";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const EnhanceComponent = HOC(DisplayData);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setData(["item1", "item2", "item3", "item4"]);
      setLoading(false);
    }, 3000);

  
  }, []);

  return <div>
    <EnhanceComponent   isLoading={loading} data={data}/>
  </div>;
};

export default App;
