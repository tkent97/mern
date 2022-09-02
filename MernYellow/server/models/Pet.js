const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({    // ******* CHANGE NAME!!!!!!! ************
    name: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 chars long"]
    },
    type: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 chars long"]
    },
    description: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 chars long"]
    },
    skill1: {
        type: String,
    },
    skill2: {
        type: String,
    },
    skill3: {
        type: String,
    },
}, { timestamps: true });

const Pet = mongoose.model("Pet", PetSchema);  // ******* CHANGE NAME X4!!!!!!! ************
module.exports = Pet