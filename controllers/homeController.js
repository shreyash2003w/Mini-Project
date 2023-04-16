const Students = require("../models/students");

function homeController() {
  return {
    async index(req, res) {
      const placedStudents = await Students.find();

      return res.render("home", { placedStudents: placedStudents });
    },
  };
}

module.exports = homeController;
