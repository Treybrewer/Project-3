const router = require("express").Router();
const companyResults = require("../../controllers/companyResultsController");

// Matches with "/api/companyresults"
router.route("/")
  .get(companyResults.findAll)
  .post(companyResults.create);

// Matches with "/api/companyresults/:id"
router
  .route("/:id")
  .get(companyResults.findById)
  .put(companyResults.update)
  .delete(companyResults.remove);

module.exports = router;
