const { Router } = require("express");
const users = require("./authentication/users");
const authorization = require("./authentication/authorization");

module.exports = { users, authorization };
