const app = require("./app.js");
require("dotenv").config();
app.listen(process.env.PORT, () => {
  console.log(`Server is flying high on http://localhost:${process.env.PORT}`);
});
