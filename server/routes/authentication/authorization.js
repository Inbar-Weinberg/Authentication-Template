require("dotenv").config();
const jwt = require("jsonwebtoken");

const { REFRESH_TOKENS } = require("../../database");
const { findUserByEmail, setCookies, resetCookies } = require("./utils");

async function authorization(req, res, next) {
  // paths that don't require authorization
  const nonSecurePaths = ["/", "/users/register", "/users/login"];
  if (nonSecurePaths.includes(req.path)) return next();

  const accessToken = req.cookies.accessToken;
  if (accessToken)
    try {
      jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
      return next();
    } catch (error) {
      if (error.name === "TokenExpiredError")
        return authorizeRefreshToken(req, res, next);
    }

  // no access token or bad access token but not because of time out
  const email = req.cookies.email;
  resetCookies(res);
  if (email && findUserByEmail(email)) return res.status(403).send("User must log in");
  return res.status(401).send("User must sign up or log in");
}

function authorizeRefreshToken(req, res, next) {
  const refreshToken = req.cookies.refreshToken;
  if (refreshToken && REFRESH_TOKENS.includes(refreshToken))
    try {
      const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
      setCookies(res, { email: decoded.email, password: decoded.password });
      return next();
    } catch (error) {
      if (err.name === "TokenExpiredError")
        return res.status(403).send("User must log in again");
    }
}

module.exports = authorization;
