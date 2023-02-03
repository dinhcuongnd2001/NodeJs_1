// // const mongoose = require("mongoose");
// const { MongoClient } = require("mongodb");

// async function main() {
//   const client = new MongoClient("mongodb://127.0.0.1:27017/myNewDataBase");
//   try {
//     await client.connect();
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// }

// module.exports = main;

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/myNewDataBase");

module.exports = mongoose;
