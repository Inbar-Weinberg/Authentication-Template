
const jwt = require("jsonwebtoken");
const { USERS } = require("../../database");
let { REFRESH_TOKENS } = require("../../database");

function findUserByEmail(email) {
  return USERS.find((user) => user.email === email);
}

function resetCookies(res) {
  removeRefreshToken(res.cookie.refreshToken);
  res.cookie("loggedIn", false, { maxAge: 0 });
  res.cookie("email", "", { maxAge: 0 });
  res.cookie("name", "", { maxAge: 0 });
  res.cookie("accessToken", "", { httpOnly: true, maxAge: 0 });
  res.cookie("refreshToken", "", {
    httpOnly: true,
    maxAge: 0,
  });
}

function setCookies(res, { email, password }) {
  res.cookie("loggedIn", true, { maxAge: 1000 * 60 * 60 * 24 });
  res.cookie("email", email, { maxAge: 1000 * 60 * 60 * 24 });
  res.cookie("name", findUserByEmail(email).name, {
    maxAge: 1000 * 60 * 60 * 24,
  });
  res.cookie("accessToken", generateAccessToken({ email, password }), {
    httpOnly: true,
    maxAge: 1000 * 60 * 15,
  });
  res.cookie("refreshToken", generateRefreshToken({ email, password }), {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  });
}

function generateAccessToken({ email, password }) {
  return jwt.sign({ email, password }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
}

function generateRefreshToken({ email, password }) {
  const refreshToken = jwt.sign({ email, password }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "24h",
  });
  REFRESH_TOKENS.push(refreshToken);
  return refreshToken;
}

function removeRefreshToken(refreshToken) {
  if (refreshToken)
    REFRESH_TOKENS = REFRESH_TOKENS.filter((token) => token !== refreshToken);
}

module.exports = { setCookies, resetCookies, findUserByEmail };
