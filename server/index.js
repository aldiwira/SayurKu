const express = require("express");
const app = express();
const mongooDb = require("./config/mongoose");
const dotenv = require("dotenv/config");
//Greating Middle
app.get("/", (req, res) => {
  res.status(200).json({
    name: "Sayur App",
  });
});
//run host and port app
app.listen(process.env.PORT, () => {
  //checking error when connecting database
  const connection = mongooDb.connection;
  connection.on("error", (error) => {
    console.log(error);
  });
  console.log("Magic At " + process.env.HOST + ":" + process.env.PORT);
});
