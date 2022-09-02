const mongoose = require("mongoose");

module.exports = (DB) => {
    mongoose.connect(`mongodb://localhost/${DB}`)
        .then(() => console.log(`connected to ${DB}`))
        .catch(err => console.log(`ERROR Connecting to DB`))
}
