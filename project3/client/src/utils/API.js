import axios from "axios";

export default {

// uses route: /api/companyrequirements/
 
addNewCompany: function(data) {
  return axios.post("/api/companyrequirements/", data);
},

allCompanies: function() {
  return axios.get("/api/companyrequirements");
},

updateCompany: function(company, data) {
  return axios.put("/api/companyrequirements" + company , data);
},

deleteCompany: function(company) {
  return axios.delete("/api/compayrequirements/" + company );
},

returnSpecificCompany: function(company) {
  return axios.get("/api/companyrequirements/" + company);
},

// uses routes: /api/companyresults/

seeAllResults: function() {
  return axios.get("/api/companyresults");
},

saveSpecificCompanyResult: function(data) {
  return axios.post("/api/companyresults", data);
},

seeSpecificCompanyResult: function(company) {
  return axios.get("/api/companyresults/" + company);
},

updateCompanyResult: function(company, data) {
  return axios.put("/api/companyresults/" + company, data);
},

deleteCompanyResult: function(company) {
  return axios.delete("/api/companyresults/" + company);
},

// uses routes: /api/operations/


runSpecificMatch: function(company) {
  return axios.put("/api/operations" + company);
},

runAllMatches: function() {
  return axios.post("/api/operations");
},


};

