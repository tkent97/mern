const express = require("express");

const cors = require("cors");

const app = express();

const PORT = 8000;

const DB = "Pet_Shelter"; // ****** CHANGE THIS DATABASE NAME***************

app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }));

require('./config/mongoose.config')(DB);
// *********** UNCOMMENT THESE AFTER AND CHANGE THE PRODUCT TO SOMETHING ELSE************ 
require("./routes/Pet.routes")(app);

app.listen(PORT, () => console.log(`server up on port: ${PORT}`))