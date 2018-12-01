const router = require("express").Router();
const companyRequirements = require("../../controllers/companyRequirementsController");

 // Matches with "/api/companyrequirements"
router.route("/")
  .get((req, res) => {
    console.log("a request for all companies.")
    companyRequirements.findAll()
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  })

  router.route("/")
  .post((req, res) => {
    console.log("post request to create")
    console.log(req.body)

    companyRequirements.create(req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  router.route("/:company")

  .get((req, res) => {
    companyRequirements.findByCompany(req.params.company)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  })

  router.route("/:company")
  .put((req, res) => {
    console.log("this is updating companyrequirements info")
    console.log(req.params.company)
    console.log(req.body)
    companyRequirements.update(req.params.company, req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  })

  router.route("/:company")
  .delete((req, res) => {
    console.log("this is req to delete company");
    console.log(req.params.company)
    companyRequirements.remove(req.params.company)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  })


  module.exports = router;

  //===================================

//   // Matches with "/api/companyrequirements"
// router.route("/")

// .get(companyRequirements.findAll)
// .post(companyRequirements.create);

// // Matches with "/api/books/:id"
// router
// .route("/:id")
// .get(companyRequirements.findById)
// .put(companyRequirements.update)
// .delete(companyRequirements.remove);

// module.exports = router;