const router = require("express").Router();
const pool = require("../../controllers/poolController");

 // Matches with "/api/pool"


router.route("/")
  .get((req, res) => {
    console.log("a request for all potential team members.")
    pool.findAll()
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  })

  router.route("/")
  .post((req, res) => {
    console.log("post request to create pool")
    console.log(req.body)

    pool.create(req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  router.route("/:employeeNumber")

  .get((req, res) => {
    pool.findByemployeeNumber(req.params.employeeNumber)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  })

  router.route("/:employeeNumber")
  .put((req, res) => {
    console.log("this is updating pool info")
    console.log(req.params.employeeNumber)
    console.log(req.body)
    pool.update(req.params.employeeNumber, req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  })

  router.route("/:employeeNumber")
  .delete((req, res) => {
    console.log("this is req to delete employeeNumber");
    console.log(req.params.employeeNumber)
    pool.remove(req.params.employeeNumber)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  })


  module.exports = router;

  //===================================
