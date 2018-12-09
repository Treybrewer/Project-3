const db = require("../models");

// received data for the company requirements: companyname, keywords
module.exports = {

  findAll: function () {
    return db.poolModel
      .find({})
      // .sort({ date: -1 })
  },
  findByEmployeeNumber: function (employeeNumber) {
    return db.poolModel
      .findOne({ employeeNumber: employeeNumber })
  },

 
  create: function (data) {
    console.log("poolController.js.create");
    console.log(data);
    return db.poolModel
      .create(data)
  },
  update: function (employeeNumber, data) {
    console.log("poolcontroller.js ")
    console.log(employeeNumber);
    console.log(data);
    return db.poolModel
      .findOneAndUpdate({ employeeNumber: employeeNumber }, data, {new: true})
  },
  remove: function (employeeNumber) {
    console.log("removing this one: " + employeeNumber)
    return db.poolModel
    .findOneAndRemove({employeeNumber: employeeNumber})
      
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
