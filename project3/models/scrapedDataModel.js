const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scrapedDataSchema = new Schema({

// determine how the scraped resumes will be saved into the collection

  resume: { type: String},
  date: { type: Date, default: Date.now }

  // title: { type: String, required: true },
  // author: { type: String, required: true },
  // synopsis: String,



});

const ScrapedDataModel = mongoose.model("ScrapedData", scrapedDataSchema);

module.exports = ScrapedDataModel;
