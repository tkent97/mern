const { create } = require("../models/Dj")
const Dj = require("../models/Dj")        // ******* CHANGE NAME X3!!!!!!! ************

module.exports = {
    findAll: (req, res) => {
        Dj.find()
            .then(allDj => res.json(allDj))       // ******* CHANGE NAME X3!!!!!!! ************
            .catch(err => res.json({ message: "error", error: err }))
    },

    findOne: (req, res) => {
        Dj.findById(req.params.id)
            .then(dj => res.json(dj))              // ******* CHANGE NAME X3!!!!!!! ************
            .catch(err => res.json({ message: "error", error: err }))
    },

    create: (req, res) => {
        // const {title, content, isImportant} = req.body
        Dj.create(req.body)
            .then(newDj => res.json(newDj))           // ******* CHANGE NAME X3!!!!!!! ************
            .catch(err => res.status(400).json(err))
    },
    update: (req, res) => {
        Dj.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updateddj => res.json(updateddj))             // ******* CHANGE NAME X3!!!!!!! ************
            .catch(err => res.json({ message: "error", error: err }))
    },
    delete: (req, res) => {
        Dj.findByIdAndDelete(req.params.id)
            .then(result => res.json({ result: result }))      // ******* CHANGE NAME!!!!!!! ************
            .catch(err => res.json({ err: err }))
    }
}