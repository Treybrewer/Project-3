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
}





};

