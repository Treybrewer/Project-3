const router = require("express").Router();

const createTeam = require("./createTeamAPI");
const teamsRoutes = require("./teamsAPI");
const employeeRoutes = require("./employeeAPI");

// create team route
router.use("/teamrequirements", createTeam);

// employee routes
router.use("/employees", employeeRoutes);


// teams routes
router.use("/teams", teamsRoutes);




module.exports = router;
