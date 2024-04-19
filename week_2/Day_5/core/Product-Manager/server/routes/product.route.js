const ProductController = require ("../controllers/product.controller");

module.exports= (app) => {
    app.get("/api/products", ProductController.findAllProducts);
    app.get("/api/products/:id", ProductController.findOneSingleProduct)
    app.post("/api/products", ProductController.createNewProduct)
}