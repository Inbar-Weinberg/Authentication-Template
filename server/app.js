const path = require("path");
const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const { authorization, users } = require("./routes");

//app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());
app.use(cookieParser());
app.use(authorization);

app.get("/authorization", (req, res) => {
  res.send("authorization");
});
app.use("/users", users);
app.use("*", (req, res) => {
  //res.status(404).redirect("/");
  res.status(404).send("bad address");
});
module.exports = app;
