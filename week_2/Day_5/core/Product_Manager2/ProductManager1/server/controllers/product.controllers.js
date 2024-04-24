const Product = require("../modules/product.model")



module.exports = {
        //? =========== READ ALL ==========
        AllProduct: (req,res) => {
            Product.find()
                .then((allProduct) => {
                    console.log(allProduct)
                    res.status(200).json(allProduct)
            
                }).catch((err) => {
                    console.log(err)
                    res.status(400).json()
            })
    },
        //? =========== READ ONE ==========
    findOneSingleProduct : (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then(oneSingleProduct => {
                res.status(200).json(oneSingleProduct);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
        //? =========== CREATE ==========
        CreateProduct : (req, res) => {
        Product.create(req.body)
        .then((CreatedProduct) => {
                    console.log(CreatedProduct)
                    res.status(200).json(CreatedProduct)
                }).catch((err) => {
                res.status(400).json(err)
            })
        },
            //? =========== UPDATE ==========
        updateExistingProduct : (req, res) => {
            Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
                .then(updatedProduct => {
                    res.status(200).json(updatedProduct);
                })
                .catch((err) => {
                    res.status(400).json(err);
                });
        },

        //? =========== DELETE ==========
        deleteAnExistingProduct : (req, res) => {
            Product.deleteOne({ _id: req.params.id })
                .then(result => {
                    res.status(200).json(result);
                })
                .catch((err) => {
                    res.status(400).json(err);
                });
        }

}