const ProductControllers = require("../controllers/product.controllers")


module.exports = (app) => {
        //? =========== READ ALL ==========
        app.get("/api/product", ProductControllers.AllProduct);
        //? =========== READ ONE ==========
        app.get('/api/product/:id', ProductControllers.findOneSingleProduct);
        //? =========== UPDATE ==========
        app.patch('/api/product/:id', ProductControllers.updateExistingProduct);        
        //? =========== CREATE ==========
        app.post("/api/product", ProductControllers.CreateProduct)
        //? =========== DELETE ==========
        app.delete('/api/product/:id', ProductControllers.deleteAnExistingProduct);
        
}