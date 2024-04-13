const express = require('express');
const router = express.Router();

const jokesController = require('../controllers/jokes.controller');

// Get all jokes
router.get('/', jokesController.getJokes);

// Get a single joke
router.get('/:id', jokesController.getJokeById);

// Create a joke (with validation)
router.post('/', jokesController.createJoke);

// Update a joke (with validation)
router.put('/:id', jokesController.updateJoke);

// Delete a joke
router.delete('/:id', jokesController.deleteJoke);

// Get a random joke (Bonus Feature)
router.get('/random', jokesController.getRandomJoke);

module.exports = router;
