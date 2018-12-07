const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companyRequirementsSchema = new Schema({

// insert the search requirements from the company

  company: { type: String },
  searchWords: [ String ],
  date: { type: Date, default: Date.now }


});

const CompanyRequirementsModel = mongoose.model("CompanyRequirements", companyRequirementsSchema);

module.exports = CompanyRequirementsModel;
