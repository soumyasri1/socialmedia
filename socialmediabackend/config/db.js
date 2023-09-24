const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://soumyasri2245:Soumya22%4034@cluster0.u2ywt3o.mongodb.net/test4?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "mongodb connection error"));

db.once("open", () => {
  console.log("connected to mongodb");
});

module.exports = db;
