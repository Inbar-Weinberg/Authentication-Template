
const USERS = [
  {
    email: "admin@email.com",
    name: "admin",
    password: "$2b$10$k9ve9xVl/ieS.5IKoJZmk.OgNV6Tu4tzUjKpWJ7s6o/WMQLAA9zoG",
    isAdmin: true,
  },
];
//{email, name, password, isAdmin}
const INFORMATION = [{ email: "admin@email.com", info: "admin info" }];
//.{email, info}...
let REFRESH_TOKENS = [];

module.exports = {
  USERS,
  INFORMATION,
  REFRESH_TOKENS,
};
