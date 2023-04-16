const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  Company_Name: { type: String, required: true },
  Job_Title: { type: String, required: true },
  Location: { type: String, required: true },
  Salary: { type: String, required: true },
  link: { type: String },
});

module.exports = mongoose.model("Company", companySchema);
