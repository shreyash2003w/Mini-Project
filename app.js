const express = require("express");
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
const mongoose = require("mongoose");
const homeController = require("./controllers/homeController");
const companyController = require("./controllers/companyController");
const app = express();
const bodyParser = require("body-parser");
const Student = require("./models/students");
const Company = require("./models/company");
var path = require("path");
const PORT = process.env.PORT || 3000
require("dotenv/config")
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(express.static(path.join()));
app.use(bodyParser.urlencoded({ extended: true }));

// Database Connection

mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });
mongoose.connection
  .once("open", () => console.log("database Connected"))
  .on("error", (error) => {
    console.log(`ERROE:${error}`);
  });

//Home Page
app.get("/", homeController().index);

//Companies Hiring Page
app.get("/company", companyController().index);

//About us Page
app.get("/aboutus", function (req, res) {
  res.render("aboutus");
});

// Add new hiring companies
app.get("/addcompany", function (req, res) {
  res.render("addcompany");
});

app.post("/addcompany", function (req, res) {
  let newCompany = new Company({
    Company_Name: req.body.name,
    Job_Title: req.body.profile,
    Location: req.body.location,
    Salary: req.body.salary,
    link: req.body.link,
  });
  newCompany.save().then(res.render("addcompany"));
});

//Add Student
app.get("/addstudent", function (req, res) {
  res.render("addstudent");
});

app.post("/addstudent", function (req, res) {
  let newStudent = new Student({
    name: req.body.name,
    company: req.body.company,
    salary: req.body.salary,
    image: req.body.image,
  });
  newStudent.save().then(res.render("addstudent"));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} `);
});
