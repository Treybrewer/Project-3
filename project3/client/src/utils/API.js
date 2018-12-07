import axios from "axios";

export default {

// uses route: /api/companyrequirements/
 
addNewTeam: function(data) {
  console.log(data);
  return axios.post("/api/teamrequirements", data);
},










// allCompanies: function() {
//   return axios.get("/api/companyrequirements");
// },

// updateCompany: function(company, data) {
//   return axios.put("/api/companyrequirements/" + company , data);
// },

// deleteCompany: function(company) {
//   console.log("!!!! company to delete: " + company);
//   return axios.delete("/api/companyrequirements/" + company );
// },

// returnSpecificCompany: function(company) {
//   return axios.get("/api/companyrequirements/" + company);
// },

// // uses routes: /api/companyresults/

// seeAllResults: function() {
//   return axios.get("/api/companyresults");
// },

// saveSpecificCompanyResult: function(data) {
//   return axios.post("/api/companyresults", data);
// },

// seeSpecificCompanyResult: function(company) {
//   return axios.get("/api/companyresults/" + company);
// },

// updateCompanyResult: function(company, data) {
//   return axios.put("/api/companyresults/" + company, data);
// },

// deleteCompanyResult: function(company) {
//   return axios.delete("/api/companyresults/" + company);
// },

// // uses routes: /api/operations/


// runSpecificMatch: function(company) {
//   return axios.get("/api/operations/" + company);
// },


// // may note use this function client side.
// runAllMatches: function() {
//   return axios.post("/api/operations");
// },


};

