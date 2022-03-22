const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Post",PostSchema);
