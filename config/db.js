const { MongoClient } = require("mongodb");

var db;

try {
  const client = new MongoClient(process.env.DB_URL);
  db = client.db("webstore");
  console.log("Connected to database.");
} catch (e) {
  console.log("Failed to connect to database. ", e);
}
module.exports = db;
