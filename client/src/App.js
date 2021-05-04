import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useQuery } from "react-query";
import axiosApiInstance from "./app/axiosInterceptor";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Logout from "./components/Logout/Logout";

import { useSelector } from "react-redux";
import { selectLoggedIn } from "./features/loginState/LoginSlice";

function App() {
  useQuery(
    "authorization",
    async () => {
      await axiosApiInstance.get("/authorization");
    },
    { retry: 1 }
  );

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/register" exact>
          {useSelector(selectLoggedIn) ? <Redirect to="/" /> : <RegisterForm />}
        </Route>
        <Route path="/login" exact>
          {useSelector(selectLoggedIn) ? <Redirect to="/" /> : <LoginForm />}
        </Route>
        <Route path="/logout" exact>
          <Logout />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
