const db = require("../models");


module.exports = {

  findAll: function () {
    return db.teamModel
      .find({})

  },
  findByTeamName: function (teamName) {
    console.log("222 see if this team name matches")
    console.log(teamName);
    return db.teamModel
      .findOne({ teamName: teamName })
      .populate("Pool")
  },

  create: function (data) {
    // console.log("teamController.js.create");
    // console.log(data);
    return db.teamModel
      .create(data)
  },

  update: function (teamName, data) {
    // console.log("@@@@@@@@@@@@@@@@@@ pushing data to team [] ")
    console.log(teamName);
    console.log(data);
    return db.teamModel
      .findOneAndUpdate({ teamName: teamName },
        { $push: {members: data} }, {new: true})
  },

  remove: function (teamName) {
    // console.log("removing this one: " + teamName)
    return db.teamModel
    .findOneAndRemove({teamName: teamName})
  }

};




// WOULD LIKE TO GET THIS WORKING...

// update: function (teamName, data) {
//   // console.log("@@@@@@@@@@@@@@@@@@teamcontroller.js ")
//   // console.log(teamName);
//   // console.log(data);
//   return db.teamModel
//     .findOneAndUpdate({ teamName: teamName },
//       { $push: { members: data } }, {new: true})
// },
