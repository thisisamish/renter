require("dotenv").config();
const express = require("express");
const genres = require("./routes/genres");
const customers = require("./routes/customers");
const users = require("./routes/users");
const auth = require("./routes/auth");
const mongoose = require("mongoose");

if (!process.env.JWT_PRIVATE_KEY) {
  console.error("FATAL ERROR: JWT_PRIVATE_KEY is not defined.");
  process.exit(1);
}

const app = express();
mongoose
  .connect("mongodb://localhost/renter")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log(err.message));

app.use(express.json());
app.use("/api/genres", genres);
app.use("/api/customers", customers);
app.use("/api/users", users);
app.use("/api/auth", auth);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});
