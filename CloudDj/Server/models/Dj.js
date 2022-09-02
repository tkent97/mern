const mongoose = require("mongoose");

const DjSchema = new mongoose.Schema({    // ******* CHANGE NAME!!!!!!! ************
    djname: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 chars long"]
    },
    email: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 chars long"]
    },
    password: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 chars long"]
    },
    confirmpassword: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 chars long"]
    },

}, { timestamps: true });

const Dj = mongoose.model("DJ", DjSchema);  // ******* CHANGE NAME X4!!!!!!! ************
module.exports = Dj