const { create } = require("../models/Pet")
const Pet = require("../models/Pet")        // ******* CHANGE NAME X3!!!!!!! ************

module.exports = {
    findAll: (req, res) => {
        Pet.find()
            .then(allPet => res.json(allPet))       // ******* CHANGE NAME X3!!!!!!! ************
            .catch(err => res.json({ message: "error", error: err }))
    },

    findOne: (req, res) => {
        Pet.findById(req.params.id)
            .then(pet => res.json(pet))              // ******* CHANGE NAME X3!!!!!!! ************
            .catch(err => res.json({ message: "error", error: err }))
    },

    create: (req, res) => {
        // const {title, content, isImportant} = req.body
        Pet.create(req.body)
            .then(newPet => res.json(newPet))           // ******* CHANGE NAME X3!!!!!!! ************
            .catch(err => res.status(400).json(err))
    },
    update: (req, res) => {
        Pet.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedpet => res.json(updatedpet))             // ******* CHANGE NAME X3!!!!!!! ************
            .catch(err => res.json({ message: "error", error: err }))
    },
    delete: (req, res) => {
        Pet.findByIdAndDelete(req.params.id)
            .then(result => res.json({ result: result }))      // ******* CHANGE NAME!!!!!!! ************
            .catch(err => res.json({ err: err }))
    }
}