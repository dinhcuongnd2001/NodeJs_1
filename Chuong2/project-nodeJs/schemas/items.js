const mongoose = require("mongoose");

// create the schema is the format table
const ItemSchema = mongoose.Schema({
  name: String,
  status: String,
  ordering: Number,
});

module.exports = mongoose.model("ItemsCollection", ItemSchema);
