import React, { useContext } from "react";
import { userContext } from "../context/context";

const UserComp = ({name}) => {
  const userData = useContext(userContext)
  return (
    <div>
      <h1>user child component</h1>

      <p>User Name: {userData.name}</p>
      <p>User email: {userData.email}</p>
      <p>user password: {userData.password}</p>
    </div>
  );
};

export default UserComp;
