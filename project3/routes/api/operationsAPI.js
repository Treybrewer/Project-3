const router = require("express").Router();
const operations = require("../../logicController/operations");

// Matches with "/api/operations"



router.route("/")

  .post((req,res) => {
    console.log("match search for specific company");
    console.log(req.body)
    operations.runSpecificCompanyforMatch(res.body)

  })
  // .get(operations.runAllCompaniesForMatches)
  .post(operations.runAllCompaniesForMatches);

// Matches with "/api/operations/:id"
router
  .route("/:id")
  // .get(operations.findById)
  .put(operations.runSpecificCompanyforMatch)
  // .delete(operations.remove);

module.exports = router;
