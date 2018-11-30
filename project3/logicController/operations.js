
// this file will be called from routes/api/companyResultsAPI.js

const scrapeData = require("./scrapeData");


const db = require("../models");

// Defining methods for the scrapedDataModelController
module.exports = {

  runAllCompaniesForMatches: function(req, res) {

  },





  runSpecificCompanyforMatch: function(req, res) {
    // get the name of the company
    let name = req.params.company;
    console.log("this is the company: " + name)



      // findbyid, company
        // get keywords from that company

      // scrape linkedin
      //  save into a var array


      // function to match keyword

      //  save the matches to db.companymatches

      // res.(finished)




    // call a scrape() from "./scrapeData.js".
    // req.body.location = "linkedin url".
    scrapeData.performScrape(req.body.location)
    // scrapeData.performScrape(req.body.location)  this will do a scrape at the location in req.body.location
    // let scrapedData = [].






    // use "let name" to return from the database for the keywords associated with that company.
    // let keywords = [].
   
    // let matches = [].
    // compare scrapedData to keywords and return matches

    // send matches[] to the database collection ("companyresults")
    


    res.send("operation completed");
  },
  
};