const mongoose = require("mongoose");
const env = require("dotenv/config");

//Mongo DB Connect with URI from envelope
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(process.env.URI, options).catch((err) => {
  console.log(err);
});

module.exports = mongoose;
