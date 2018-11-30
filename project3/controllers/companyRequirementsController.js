const db = require("../models");

// received data for the company requirements: companyname, keywords
module.exports = {

  findAll: function () {
    return db.CompanyRequirementsModel
      .find({})
      // .sort({ date: -1 })
  },
  findByCompany: function (company) {
    return db.CompanyRequirementsModel
      .findById(company)
  },
  create: function (data) {
    console.log("companyRequirementsController.js.create");
    console.log(data);
    return db.CompanyRequirementsModel
      .create(data)
  },
  update: function (company, data) {
    console.log("companyrequirementscontroller.js ")
    console.log(company);
    console.log(data);
    return db.CompanyRequirementsModel
      .findOneAndUpdate({ company: company }, data, {new: true})
  },
  remove: function (company) {
    console.log("removing this one: " + company)
    return db.CompanyRequirementsModel
    .findOneAndRemove({company: company})
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
