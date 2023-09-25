const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Category = new Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  restrictModel: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
});

mongoose.model("categories", Category);
