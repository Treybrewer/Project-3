const db = require("../models");

// received data for the company requirements: companyname, keywords
module.exports = {

  findAll: function () {
    return db.teamRequestModel
      .find({})
      // .sort({ date: -1 })
  },
  findByTeam: function (team) {
    return db.teamRequestModel
      .findOne({ team: team })
  },

  // findByCompany: function (company) {
  //   return db.CompanyRequirementsModel
  //     .findById(company)
  // },
  create: function (data) {
    console.log("teamRequirementsController.js.create");
    console.log(data);
    return db.teamRequestModel
      .create(data)
  },
  update: function (team, data) {
    console.log("teamrequirementscontroller.js ")
    console.log(team);
    console.log(data);
    return db.teamRequestModel
      .findOneAndUpdate({ team: team }, data, {new: true})
  },
  remove: function (team) {
    console.log("removing this one: " + team)
    return db.teamRequestModel
    .findOneAndRemove({team: team})
      // .findById({ company: company })
      // .then(dbModel => dbModel.remove())
  }

};


//===================================


// findAll: function(req, res) {
//   db.CompanyRequirementsModel
//     .find(req.query)
//     .sort({ date: -1 })
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err))
// },
// findById: function(req, res) {
//   db.CompanyRequirementsModel
//     .findById(req.params.id)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },
// create: function(req, res) {
//   console.log("companyRequirementsController.js.create");
//   console.log(req.body);
//   db.CompanyRequirementsModel
//     .create(req.body)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },
// update: function(req, res) {
//   db.CompanyRequirementsModel
//     .findOneAndUpdate({ _id: req.params.id }, req.body)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },
// remove: function(req, res) {
//   db.CompanyRequirementsModel
//     .findById({ _id: req.params.id })
//     .then(dbModel => dbModel.remove())
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// }