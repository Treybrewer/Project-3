const router = require("express").Router();
const teams = require("../../controllers/teamsController");

 // Matches with "/api/teams"


router.route("/")
  .get((req, res) => {
    console.log("a request for all companies.")
    teams.findAll()
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  })

  router.route("/")
  .post((req, res) => {
    console.log("post request to create teams")
    console.log(req.body)

    teams.create(req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  router.route("/:teamname")

  .get((req, res) => {
    employee.findByTeamName(req.params.teamname)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  })

  router.route("/:teamname")
  .put((req, res) => {
    console.log("this is updating teams")
    console.log(req.params.teamname)
    console.log(req.body)
    teams.update(req.params.teamname, req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  })

  router.route("/:teamname")
  .delete((req, res) => {
    console.log("this is req to delete teamname");
    console.log(req.params.teamname)
    employee.remove(req.params.teamname)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  })


  module.exports = router;

  //===================================