var mongoose = require('mongoose');

var crimeSchema = new mongoose.Schema({
  date: String,
  state: String,
  genrace: String,
  name: String,
  age: Number,
  type: String,
  kbplink: String,
  newslink: String
})

var crimes = mongoose.model('crimes', crimeSchema);

module.exports = crimes;
