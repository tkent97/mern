const express = require('express');


const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("hello");
app.get("/api", (requestObj, responseObj) => {
    console.log("hello from server.js ")
})

app.get("/api/hello", (req, res) => {
    // res.send("hello from server.js")
    res.json({ status: "hello" })
})
const users = [
    { firstName: "Reimu", lastName: "Hakurei" },
    { firstName: "Marisa", lastName: "Kirisame" },
    { firstName: "Sanae", lastName: "Kochiya" },
    { firstName: "Sakuya", lastName: "Izayoi" },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

app.get("/api/users", (req, res) => {
    res.json(users);

});

app.get("/api/users/:id", (req, res) => {
    console.log(req)
    const { id } = req.params;
    res.json({
        your_id: req.params.id,
        status: "ok",
        user: users[req.params.id]
    })
})

app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
    // we can push it into the users array for now...
    // later on this will be inserted into a database
    users.push(req.body);
    // we always need to respond with something
    res.json({ status: "ok" });
});

app.listen(port, () => console.log(`server started on port ${port} and is listening for REQuest to RESpond `))