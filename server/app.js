const path = require("path");
const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const { authorization, users } = require("./routes");

//if (process.env.SERVE_CLIENT)

app.use(express.static(path.join(__dirname, "../client/build")));

app.use(express.json());
app.use(cookieParser());
app.use(authorization);

//! remove later
// app.get("/test", (req, res) =>
//   res.json({
//     type: typeof !!process.env.SERVE_CLIENT,
//     content: !!process.env.SERVE_CLIENT,
//   })
// );

app.get("/authorization", (req, res) => {
  res.send("authorization");
});
app.use("/users", users);

app.use((req, res) => {
  if (process.env.SERVE_CLIENT)
    res.status(404).sendFile(path.join(__dirname + "../client/build/index.html"));
  else res.status(404).send("bad address");
});
module.exports = app;
