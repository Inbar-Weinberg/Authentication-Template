import React from "react";
import styles from "./Navbar.module.scss";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "../../features/loginState/LoginSlice";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">Home</Link>

      {useSelector(selectLoggedIn) ? (
        <Link to="/logout">Logout</Link>
      ) : (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
