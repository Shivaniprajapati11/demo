const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(bodyParser.json());

let notes = []; // simple memory storage

// Get all notes
app.get("/notes", (req, res) => {
    res.json(notes);
});

// Add note
app.post("/notes", (req, res) => {
    const note = req.body.note;
    notes.push(note);
    res.json({ message: "Note added" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});