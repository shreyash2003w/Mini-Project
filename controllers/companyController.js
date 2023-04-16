const Company = require("../models/company");

function companyController() {
  return {
    async index(req, res) {
      const companies = await Company.find();

      return res.render("company", { companies: companies });
    },
  };
}

module.exports = companyController;
