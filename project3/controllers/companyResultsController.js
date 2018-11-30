const db = require("../models");

// returns data to the companyResultsAPI
// this will display the returned matches to the user

module.exports = {

  findAll: function () {
    return db.CompanyResultsModel
      .find({})
      // .sort({ date: -1 })
  },
  findByCompany: function (company) {
    return db.CompanyResultsModel
      .findById(company)
  },
  create: function (data) {
    console.log("companyResultsController.js.create");
    console.log(data);
    return db.CompanyResultsModel
      .create(data)
  },
  update: function (company, data) {
    console.log("companyResultsscontroller.js ")
    console.log(company);
    console.log(data);
    return db.CompanyResultsModel
      .findOneAndUpdate({ company: company }, data, {new: true})
  },
  remove: function (company) {
    console.log("removing this one: " + company)
    return db.CompanyResultsModel
    .findOneAndRemove({company: company})
      // .findById({ company: company })
      // .then(dbModel => dbModel.remove())
  }

};























// module.exports = {
//   findAll: function() {
//     db.CompanyResultsModel
//       .find(req.query)
//       .sort({ date: -1 })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   findById: function(req, res) {
//     db.CompanyResultsModel
//       .findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   create: function(req, res) {
//     db.CompanyResultsModel
//       .create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   update: function(req, res) {
//     db.CompanyResultsModel
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.CompanyResultsModel
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
// };
