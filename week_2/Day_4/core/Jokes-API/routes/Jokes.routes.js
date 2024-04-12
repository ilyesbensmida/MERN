const {findAllJokes, createNewJoke,deleteJoke,updateJoke,findJokeById}  = require('../controllers/jokes.controller')

module.exports = (app) => {
    app.get('/api/jokes', findAllJokes)
    app.post('/api/jokes', createNewJoke)
    app.get('/api/jokes/:id', findJokeById)
    app.put('/api/jokes/:id', updateJoke)
    app.delete('/api/jokes/:id', deleteJoke)

}