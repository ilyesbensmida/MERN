const Joke = require('../models/joke.model')

// Read All
// findAllJokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => {
            console.log("All Jokes From DB", allJokes);
            res.status(200).json({ data: allJokes, message: 'All Jokes List', ok: true })
        })
        .catch(error => {
            console.log(error);
            res.status(404).json({ error })
        })//[]
}

// findOneJoke
module.exports.findJokeById = (request, response) => {
    Joke.findOne({_id:request.params.id})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}


// Create
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newCreatedJoke => {
            console.log("New  Joke", newCreatedJoke);
            res.status(201).json({ data: newCreatedJoke, message: 'Joke Created with success', ok: true })
        })
        .catch(error => {
            console.log(error);
            res.status(404).json({ error })
        })
}
// Update

module.exports.updateJoke=(req,res)=>{
    Joke.findByIdAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
    .then(res=>{
        console.log('Update Jokes',res );
        res.status(200).json ({data: res,message: " joke updated with success",ok:true})
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({err})
    })
}

// Delete
module.exports.deleteJoke=(req,res)=>{
    Joke.findByIdAndDelete({_id:req.params.id})
    .then(res=>{
        res.status(200).json ({data: res,message: " joke delete with success",ok:true})
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({err})
    })
}

// deleteOneJoke