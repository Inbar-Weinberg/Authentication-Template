import React from "react";
import styles from "./Home.module.scss";

import { useSelector } from "react-redux";
import { selectLoggedIn, selectName } from "../../features/loginState/LoginSlice";
const Home = () => {
  const name = useSelector(selectName);
  const loggedIn = useSelector(selectLoggedIn);
  return (
    <div className={styles.home}>
      <h2>Home Page</h2>
      {loggedIn && <h3>hello {name}</h3>}
    </div>
  );
};

export default Home;
