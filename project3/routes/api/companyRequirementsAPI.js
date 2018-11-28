const router = require("express").Router();
const companyRequirements = require("../../controllers/companyRequirementsController");

// Matches with "/api/companyrequirements"
router.route("/")
  .get(companyRequirements.findAll)
  .post(companyRequirements.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(companyRequirements.findById)
  .put(companyRequirements.update)
  .delete(companyRequirements.remove);

module.exports = router;
