const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
  setup: {
    type: String,
    required: true,
  },
  punchline: {
    type: String,
    required: true,
  },
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
