var mongoose = require('mongoose');

var storySchema = new mongoose.Schema({
  date: String,
  state: String,
  genrace: String,
  name: String,
  age: Number,
  type: String,
  kbplink: String,
  newslink: String
})

var Story = mongoose.model('Story', storySchema);

module.exports = Story;
