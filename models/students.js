const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  image: { type: String },
  name: { type: String, required: true },
  company: { type: String, required: true },
  salary: { type: String, required: true },
});

module.exports = mongoose.model("Students", studentSchema);
