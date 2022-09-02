module.exports = (app) => {
    app.get("/api/dj", Dj.findAll);
    app.get("/api/dj/:id", Dj.findOne);
    app.post("/api/dj", Dj.create);        // ************************CHANGE NAME FOR ALL OF THESE*********************************
    app.put("/api/dj/:id", Dj.update);
    app.delete("/api/dj/:id", Dj.delete);
}