import React, { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [showData, setShowData] = useState({});
  const [errorData, setErrorData] = useState(null);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Registration form</h1>
      <form>
        <div className="card">
          <label htmlFor="userName">User Name: </label>
          <input
            id="userName"
            type="text"
            placeholder="Enter your Name"
            value={userData.userName}
            onChange={(event) =>
              setUserData({ ...userData, userName: event.target.value })
            }
          />
        </div>
        <div className="card">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your Email"
            value={userData.email}
            onChange={(event) =>
              setUserData({ ...userData, email: event.target.value })
            }
          />
        </div>
        <div className="card">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={userData.password}
            onChange={(event) =>
              setUserData({ ...userData, password: event.target.value })
            }
          />
        </div>
        <div className="card">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
