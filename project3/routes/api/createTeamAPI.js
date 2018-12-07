const router = require("express").Router();
const teamRequirements = require("../../controllers/teamRequirementsController");

 // Matches with "/api/teamrequirements"


router.route("/")
  .get((req, res) => {
    console.log("a request for all companies.")
    teamRequirements.findAll()
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  })

  router.route("/")
  .post((req, res) => {
    console.log("post request to create team")
    console.log(req.body)

    teamRequirements.create(req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  router.route("/:team")

  .get((req, res) => {
    teamRequirements.findByTeam(req.params.team)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  })

  router.route("/:team")
  .put((req, res) => {
    console.log("this is updating teamrequirements info")
    console.log(req.params.team)
    console.log(req.body)
    teamRequirements.update(req.params.team, req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  })

  router.route("/:team")
  .delete((req, res) => {
    console.log("this is req to delete team");
    console.log(req.params.team)
    teamRequirements.remove(req.params.team)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  })


  module.exports = router;

  //===================================
