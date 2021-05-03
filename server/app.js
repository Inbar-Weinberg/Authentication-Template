const express = require("express");
const app = express();
const { authorization, users } = require("./routes");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use(authorization);

app.get("/authorization", (req, res) => {
  res.send("authorization");
});
app.use("/users", users);
app.use("*", (req, res) => {
  console.log("by");
  res.sendStatus(404);
});
module.exports = app;
