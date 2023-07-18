const app = require("./app");
require("dotenv").config();
require("./app/db/config.js")();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server on port 3000");
});
