const router = require("express").Router();
const operations = require("../../logicController/operationsController");
const operationsController = require("../../logicController/operationsController");



// Matches with "/api/operations"


router.route("/")
.get((req, res) => {
  console.log("search for matches for all companies");
  operationsController.runAllCompaniesForMatches()
  .then(data => res.json(data))
});


router.route("/:company")

  .get((req,res) => {
    console.log("match search for specific company");
    console.log(req.params.company)

    operationsController.runSpecificCompanyforMatch(req.params.company)
    .then(data => {
      console.log("this is in operationsAPI.js")
      console.log(data);
      res.json(data)
    })

  });

  module.exports = router;



// how can i get the function on the right to return into the 
// promise .then() in the file on the left side of the screen?????