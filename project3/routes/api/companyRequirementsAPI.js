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


// router.route("/")
//   .get((req, res) => {
//     companyRequirements.findAll()
//       .then(dbresults => res.json(dbresults))
//       .catch(err => res.status(422).json(err))
//   })