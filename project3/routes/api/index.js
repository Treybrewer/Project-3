const router = require("express").Router();

const createTeam = require("./createTeamAPI");
const teamsRoutes = require("./teamsAPI");
const employeeRoutes = require("./employeeAPI");
const poolRoutes = require("./poolAPI");

// create team route
router.use("/teamrequirements", createTeam);

// employee routes
router.use("/employees", employeeRoutes);

// pool routes
router.use("/pool", poolRoutes);


// teams routes
router.use("/teams", teamsRoutes);




module.exports = router;
