const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companyResultsSchema = new Schema({

// holds the results info for all matches for the user to view

  company: { type: String },
  name: { type: String },
  resume: [ String ],

    // add a saved: false,

  // date: { type: Date, default: Date.now }


});

const CompanyResultsModel = mongoose.model("CompanyResults", companyResultsSchema);

module.exports = CompanyResultsModel;
