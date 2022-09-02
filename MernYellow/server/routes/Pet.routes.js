const Pet = require("../controllers/Pet.controller")

module.exports = (app) => {
    app.get("/api/pet", Pet.findAll);
    app.get("/api/pet/:id", Pet.findOne);
    app.post("/api/pet", Pet.create);        // ************************CHANGE NAME FOR ALL OF THESE*********************************
    app.put("/api/pet/:id", Pet.update);
    app.delete("/api/pet/:id", Pet.delete);
}