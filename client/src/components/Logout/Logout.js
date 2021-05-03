import React, { useState, useEffect } from "react";
import axiosApiInstance from "../../app/axiosInterceptor";
import { Redirect } from "react-router-dom";

const Logout = () => {
  const [logoutMessage, setLogoutMessage] = useState();
  useEffect(() => {
    handleLogout();
    async function handleLogout() {
      setLogoutMessage(await axiosApiInstance.post("/users/logout"));
    }
  }, [logoutMessage]);

  return <div>{logoutMessage ?? <Redirect to={"/"} />}</div>;
};

export default Logout;
