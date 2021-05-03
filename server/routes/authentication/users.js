const express = require("express");
const users = express.Router();
const bcrypt = require("bcrypt");

const { findUserByEmail, setCookies, resetCookies } = require("./utils");
const { USERS, INFORMATION } = require("../../database");

// Routes: register, login , logout

users.post("/register", async (req, res) => {
  const { body } = req;
  const { email, name, password, isAdmin } = body;
  if (findUserByEmail(email)) return res.status(409).send("User already exists");

  try {
    const user = {
      email,
      name,
      password: await bcrypt.hash(password, 10),
      isAdmin: !!isAdmin,
    };
    USERS.push(user);
    INFORMATION.push({ email, info: `${name} info` });

    setCookies(res, user);
    res.status(201).send("Register Succeeded");
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

users.post("/login", async (req, res) => {
  const { body } = req;
  const user = findUserByEmail(body.email);
  if (!user) return res.status(403).send("User or Password incorrect");
  try {
    if (await bcrypt.compare(body.password, user.password)) {
      setCookies(res, body);
      return res.status(200).send(`${user.name} is now logged in`);
    }
    resetCookies(res);
    res.status(403).send("User or Password incorrect");
  } catch (error) {
    console.log(err);
    res.sendStatus(500);
  }
});

users.post("/logout", (req, res) => {
  resetCookies(res);
  res.status(200).send("User Logged Out Successfully").end();
});

module.exports = users;
