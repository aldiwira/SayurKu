const express = require("express");
const app = express();
const dotenv = require("dotenv/config");
//Greating Middle
app.get("/", (req, res) => {
  res.status(200).json({
    name: "Sayur App",
  });
});
//run host and port app
app.listen(process.env.PORT, () => {
  console.log("Magic At " + process.env.HOST + ":" + process.env.PORT);
});
