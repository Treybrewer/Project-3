const db = require("../models");

// received data for the company requirements: companyname, keywords
module.exports = {

  // findAll: function() {
  //  return db.CompanyRequirementsModel
  //     .find(req.query)
  //     .sort({ date: -1 })
  // },


  findAll: function(req, res) {
    db.CompanyRequirementsModel
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findById: function(req, res) {
    db.CompanyRequirementsModel
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("companyRequirementsController.js.create");
    console.log(req.body);
    db.CompanyRequirementsModel
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.CompanyRequirementsModel
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.CompanyRequirementsModel
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
