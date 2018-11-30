const router = require("express").Router();
const companyResults = require("../../controllers/companyResultsController");



router.route("/")
  .get((req, res) => {
    console.log("a request for all results.")
    companyResults.findAll()
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  router.route("/")
  .post((req, res) => {
    console.log("post request to create")
    console.log(req.body)

    companyResults.create(req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });



router.route("/:company")

  .get((req, res) => {
    companyResults.findByCompany(req.body.company)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  router.route("/:company")
  .put((req, res) => {
    console.log("this is updating companyResults info")
    console.log(req.params.company)
    console.log(req.body)
    companyResults.update(req.params.company, req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  router.route("/:company")
  .delete((req, res) => {
    console.log("this is req to delete company");
    console.log(req.params.company)
    companyResults.remove(req.params.company)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });


  module.exports = router;



























// // Matches with "/api/companyresults"
// router.route("/")
//   .get(companyResults.findAll)
//   .post(companyResults.create);

// // Matches with "/api/companyresults/:id"
// router
//   .route("/:id")
//   .get(companyResults.findById)
//   .put(companyResults.update)
//   .delete(companyResults.remove);

// module.exports = router;
