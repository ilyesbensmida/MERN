const AuthorControllers = require("../controllers/authors.controllers")


module.exports = (app) => {
        //? =========== READ ALL ==========
        app.get("/api/authors", AuthorControllers.AllAuthors);
        //? =========== READ ONE ==========
        app.get('/api/authors/:id', AuthorControllers.findOneSingleAuthors);
        //? =========== UPDATE ==========
        app.patch('/api/authors/:id', AuthorControllers.updateExistingAuthors);        
        //? =========== CREATE ==========
        app.post("/api/authors", AuthorControllers.CreateAuthors)
        //? =========== DELETE ==========
        app.delete('/api/authors/:id', AuthorControllers.deleteAnExistingAuthors);
        
}