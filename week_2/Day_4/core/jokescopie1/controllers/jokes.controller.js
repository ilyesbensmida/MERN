const Joke = require('../models/jokes.model');

// Get all jokes
exports.getJokes = async (req, res) => {
  try {
    const jokes = await Joke.find();
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a single joke
exports.getJokeById = async (req, res) => {
  try {
    const joke = await Joke.findById(req.params.id);
    if (!joke) {
      return res.status(404).json({ message: 'Joke not found' });
    }
    res.json(joke);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a joke
exports.createJoke = async (req, res) => {
  const { setup, punchline } = req.body;

  // Simple validation (can be extended)
  if (!setup || !punchline) {
    return res.status(400).json({ message: 'Please provide both setup and punchline' });
  }

  try {
    const newJoke = new Joke({ setup, punchline });
    const savedJoke = await newJoke.save();
    res.status(201).json(savedJoke);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a joke
exports.updateJoke = async (req, res) => {
  const { setup, punchline } = req.body;

  // Simple validation (can be extended)
  if (!setup || !punchline) {
    return res.status(400).json({ message: 'Please provide both setup and punchline' });
  }

  try {
    const updatedJoke = await Joke.findByIdAndUpdate(req.params.id, { setup, punchline }, { new: true });
    if (!updatedJoke) {
      return res.status(404).json({ message: 'Joke not found' });
    }
    res.json(updatedJoke);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a joke
exports.deleteJoke = async (req, res) => {
    try {
      const deletedJoke = await Joke.findByIdAndDelete(req.params.id);
      if (!deletedJoke) {
        return res.status(404).json({ message: 'Joke not found' });
      }
      res.json({ message: 'Joke deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  exports.getRandomJoke = async (req, res) => {
    try {
      const jokeCount = await Joke.countDocuments();
      if (jokeCount === 0) {
        return res.status(404).json({ message: 'No jokes found in collection' });
      }
      const randomIndex = Math.floor(Math.random() * jokeCount);
      const randomJoke = await Joke.findOne().skip(randomIndex);
      res.json(randomJoke);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  
