const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  text: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", postSchema);
