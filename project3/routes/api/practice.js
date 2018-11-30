// this file will be called from routes/api/companyResultsAPI.js

const scrapeData = require("./scrapeData");


const db = require("../models");
const companyRequirements = require("../controllers/companyRequirementsController");
const companyResults = require("../controllers/companyResultsController");
const createMatches = require("../logicController/createMatches");

// function's to control logic for external api's
module.exports = {

    // THIS ONE NEEDS A RETURN BAD!!!!!!!

    runSpecificCompanyforMatch: function (company) {

        companyRequirements.findByCompany(company)
            .then(dbresults => {
                console.log(dbresults.searchWords);

                for (var i = 0; i < matches.length; i++) {
                    companyResults.create(matches[i])
                        .then(uploaded => {
                            console.log("match uploaded");
                            console.log(uploaded);
                        })
                }
            })

    },

    
};

// the function 'runSpecificCompayForMatch()' is called from the file on the left screen. 