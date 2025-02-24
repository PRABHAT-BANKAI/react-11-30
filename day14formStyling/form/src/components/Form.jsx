import React, { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [showData, setShowData] = useState({});
  const [errorData, setErrorData] = useState({});

  function handleSubmit(event) {
    event.preventDefault(); // prevent default helps to stop refreshing the page
    if (validation()) {
      setShowData(userData);
      setUserData({
        userName: "",
        email: "",
        password: "",
      });
    }

    // setUserData({
    //   userName: "",
    //   email: "",
    //   password: "",
    // });
  }

  function validation() {
    console.log("validation");
    let valid = true;
    let errorObject = {};
    if (userData.userName.trim()=="") {
      errorObject.userName = "userName is invalid";
      valid = false;
    }
    if (userData.email.trim() == "") {
      errorObject.email = "email is invalid";
      valid = false;
    }
    if (userData.password.trim() == "") {
      errorObject.password = "password is invalid";
      valid = false;
    }
 

    setErrorData(errorObject);
    return valid;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Registration form</h1>
      <form onSubmit={handleSubmit}>
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
          {errorData.userName && (
            <p style={{ color: "red" }}>{errorData.userName}</p>
          )}
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
           {errorData.email && (
            <p style={{ color: "red" }}>{errorData.email}</p>
          )}
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
           {errorData.password && (
            <p style={{ color: "red" }}>{errorData.password}</p>
          )}
        </div>
        <div className="card">
          <button type="submit">Submit</button>
        </div>
      </form>

      {showData.userName && (
        <div>
          <h2>Submitted Data:</h2>
          <p>User Name: {showData.userName}</p>
          <p>Email: {showData.email}</p>
          <p>Password: {showData.password}</p>
        </div>
      )}

  
    </div>
  );
};

export default Form;
