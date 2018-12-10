const db = require("../models");

// received data for the company requirements: companyname, keywords
module.exports = {

  findAll: function () {
    return db.employeeModel
      .find({})
      // .sort({ date: -1 })
  },
  findByEmployeeNumber: function (employeeNumber) {
    return db.employeeModel
      .findOne({ employeeNumber: employeeNumber })
  },

  // findByCompany: function (company) {
  //   return db.CompanyRequirementsModel
  //     .findById(company)
  // },
  create: function (data) {
    console.log("employeesController.js.create");
    console.log(data);
    return db.employeeModel
      .create(data)
  },
  update: function (employeeNumber, data) {
    console.log("employeescontroller.js ")
    console.log(employeeNumber);
    console.log(data);
    return db.employeeModel
      .findOneAndUpdate({ employeeNumber: employeeNumber }, data, {new: true})
  },
  remove: function (employeeNumber) {
    console.log("removing this one: " + employeeNumber)
    return db.employeeModel
    .findOneAndRemove({employeeNumber: employeeNumber})
      // .findById({ company: company })
      // .then(dbModel => dbModel.remove())
  },

  findByAvailable: function () {
    return db.employeeModel
      .find({available: true})
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
