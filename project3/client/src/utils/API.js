import axios from "axios";

export default {

// uses route: /api/companyrequirements/
 
addNewTeam: function(data) {
  console.log(data);
  return axios.post("/api/teamrequirements", data);
},




addNewEmployee: function(data) {
  console.log(data)
  return axios.post("/api/employees", data);
},

getAllEmployees: function() {
  return axios.get("/api/employees");
},

// working on this one now
updateEmployee: function (employeeNumber, data) {
  return axios.put("/api/employees/" + employeeNumber, data);
},

deleteEmployee: function(employeeNumber) {
  return axios.delete("/api/employees/" + employeeNumber);
},



getTeamPool: function() {
  return axios.get("/api/pool");
},

updateTeamPool: function(employeeNumber, data) {
  return axios.put("/api/pool/"+employeeNumber, data)
},


saveTeam: function(data) {
  console.log("sending new team to server")
  console.log(data);
  return axios.post("/api/teams", data);
}



};

