const Authors = require("../modules/authors.model")



module.exports = {
        //? =========== READ ALL ==========
        AllAuthors: (req,res) => {
            Authors.find()
                .then((allAuthors) => {
                    console.log(allAuthors)
                    res.status(200).json(allAuthors)
            
                }).catch((err) => {
                    console.log(err)
                    res.status(400).json()
            })
    },
        //? =========== READ ONE ==========
    findOneSingleAuthors : (req, res) => {
        Authors.findOne({ _id: req.params.id })
            .then(oneSingleAuthors => {
                res.status(200).json(oneSingleAuthors);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
        //? =========== CREATE ==========
        CreateAuthors : (req, res) => {
        Authors.create(req.body)
        .then((CreatedAuthors) => {
                    console.log(CreatedAuthors)
                    res.status(200).json(CreatedAuthors)
                }).catch((err) => {
                res.status(400).json(err)
            })
        },
            //? =========== UPDATE ==========
        updateExistingAuthors : (req, res) => {
            Authors.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
                .then(updatedAuthors => {
                    res.status(200).json(updatedAuthors);
                })
                .catch((err) => {
                    res.status(400).json(err);
                });
        },

        //? =========== DELETE ==========
        deleteAnExistingAuthors : (req, res) => {
            Authors.deleteOne({ _id: req.params.id })
                .then(result => {
                    res.status(200).json(result);
                })
                .catch((err) => {
                    res.status(400).json(err);
                });
        }

}