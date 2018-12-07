const router = require("express").Router();
const searchResultsRoutes = require("./searchResultsAPI");
const createTeam = require("./createTeamAPI");
const operationsRoutes = require("./operationsAPI");
const companyResultsRoutes = require("./companyResultsAPI");

// companyRequirements routes
router.use("/teamrequirements", createTeam);

// companyResults routes
// this link will return the matches
router.use("/teams", companyResultsRoutes);


// searchResults routes
router.use("/employees", operationsRoutes);


// searchResults routes
// router.use("/searchresults", searchResultsRoutes);

module.exports = router;
