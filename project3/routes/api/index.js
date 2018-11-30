const router = require("express").Router();
const searchResultsRoutes = require("./searchResultsAPI");
const companyRequirementsRoutes = require("./companyRequirementsAPI");
const operationsRoutes = require("./operationsAPI");
const companyResultsRoutes = require("./companyResultsAPI");

// companyRequirements routes
router.use("/companyrequirements", companyRequirementsRoutes);

// companyResults routes
// this link will return the matches
router.use("/companyresults", companyResultsRoutes);


// searchResults routes
router.use("/operations", operationsRoutes);


// searchResults routes
// router.use("/searchresults", searchResultsRoutes);

module.exports = router;
