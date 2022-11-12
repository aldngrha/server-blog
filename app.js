const express = require("express");
const mongoose = require("mongoose");
const { MONGOURI } = require("./keys");

//connection to MongoDB Atlas
mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (error) => {
  console.log(`Error: ${error}`);
});

const app = express();
const PORT = 4000;

//Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`)
})