const mongoose = require("mongoose");

// create the schema is the format table
const ItemSchema = mongoose.Schema({
  name: "string",
  status: "string",
  ordering: "string",
});

module.exports = mongoose.model("ItemsCollection", ItemSchema);
