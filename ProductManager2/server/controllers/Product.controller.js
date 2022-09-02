const { create } = require("../models/Product")
const Product = require("../models/Product")

module.exports = {
    findAll: (req, res) => {
        Product.find()
            .then(allProducts => res.json(allProducts))
            .catch(err => res.json({ message: "error", error: err }))
    },

    findOne: (req, res) => {
        Product.findById(req.params.id)
            .then(product => res.json(product))
            .catch(err => res.json({ message: "error", error: err }))
    },

    create: (req, res) => {
        // const {title, content, isImportant} = req.body
        Product.create(req.body)
            .then(newProduct => res.json(newProduct))
            .catch(err => res.json({ message: "error", error: err }))
    },
    update: (req, res) => {
        Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedproduct => res.json(updatedproduct))
            .catch(err => res.json({ message: "error", error: err }))
    },
    delete: (req, res) => {
        Product.findByIdAndDelete(req.params.id)
            .then(result => res.json({ result: result }))
            .catch(err => res.json({ err: err }))
    }
}