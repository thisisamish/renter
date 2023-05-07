const express = require("express");
const genres = require("./routes/genres");
const mongoose = require("mongoose");

const app = express();
mongoose
  .connect("mongodb://localhost/renter")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log(err.message));

app.use(express.json());
app.use("/api/genres", genres);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});
