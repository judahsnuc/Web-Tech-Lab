const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost:27017/college", {
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => {
console.log("Connection successful");
})
.catch((error) => {
});

const userschema = new mongoose.Schema({
name: String,
email: String
});

const usermodel = mongoose.model("students", userschema);
// Insert a new document into the "students" collection
const newStudent = new usermodel({
name: "John Doe",
email: "john.doe@example.com"
});

newStudent.save()
.then(() => {
})
.catch((error) => {
});

app.get("/users", (req, res) => {
usermodel.find({})
res.json(students);
.then((students) => {
console.error("Error adding new student:", error);
console.log("New student added to the database");
console.error("Error connecting to MongoDB:", error);
})
.catch((err) => {
console.log(err);
});
});

app.listen(3000, () => {
});
