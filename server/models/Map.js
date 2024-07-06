const mongoose = require("mongoose");

const mapSchema = new mongoose.Schema({
  name: String,
  thumbnail: String,
});

const Map = mongoose.model("Map", mapSchema);

module.exports = Map;
