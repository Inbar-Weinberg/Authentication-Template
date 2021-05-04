require("dotenv").config();


const app = require("./app");

const port = process.env.PORT || process.env.DEVELOPMENT_PORT;
app.listen(3001, () => console.log(`listening to port ${port}`));
