import React, { Component } from 'react';
import API from '../../utils/API';
import "./ModifyTeam.css";
import CreateStatusBar from '../../components/CreateStatusBar';
import Nav from '../../components/Nav';



export default class ModifyTeam extends React.Component {
  state = {
    teamPoolArray: [],

    currentTeamArray: [],

    teamName: "",

    startBuilding: false,

    manager: "",
    teamStartDate: "",
    teamEndDate: "",
  };

  // componentDidMount = () => {
  //   // this.teamPool();
  //   // this.currentTeam();
  //   this.setTeamName();
  // };

  // setTeamName = () => {
  //   // console.log(this.props.location.state.teamName)
  //   if (this.props.location.state.teamName) {
  //     this.setState({
  //       teamName: this.props.location.state.teamName
  //     })
  //   } else {
  //     this.setState({
  //       teamName: sessionStorage.getItem("sessionCompanyName")
  //     })
  //   }
  // };

  // change = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // };

  // startBuildingTeam = (teamName) => {
  //   // console.log(`start building ${teamName}.`)
  //   this.setState({
  //     startBuilding: true
  //   })
  //   this.teamPool(teamName);
  //   this.teamRequirements(teamName);
  // };

  // teamPool = (teamName) => {

  //   API.getSpecificTeamPool(teamName)
  //     .then(res => {
  //       // console.log("this is the return for getspecificteampool()")
  //       // console.log(res.data)
  //       this.setState({
  //         teamPoolArray: res.data,
  //       })
  //       this.currentTeam(this.state.teamName);
  //     })

  //     .catch(err => console.log(err));
  // };

  // teamRequirements = (teamName) => {

  //   API.getSpecificTeamRequirements(teamName)
  //     .then(res => {
  //       // console.log("!!!!!this is the return for getspecificteam requirements()")
  //       // console.log(res.data)
  //       this.setState({
  //         manager: res.data.manager,
  //         teamStartDate: res.data.teamStartDate,
  //         teamEndDate: res.data.teamEndDate,
  //       })
  //     })
  //     .catch(err => console.log(err));


  // };


  // addToTeam = (employeeNumber) => {
  //   console.log("this is the add to team #: " + employeeNumber);

  //   let data = {
  //     addedToTeam: true
  //   };

  //   API.updateTeamPool(employeeNumber, data)
  //     .then(res => {
  //       console.log("this is the return for updateteampool()")
  //       console.log(res.data)
  //       this.teamPool(this.state.teamName);
  //       // this.currentTeam();
  //     })
  //     .catch(err => console.log(err));
  // };

  // removeFromTeam = (employeeNumber) => {

  //   let data = {
  //     addedToTeam: false
  //   };

  //   API.updateTeamPool(employeeNumber, data)
  //     .then(res => {
  //       // console.log("this is the return for updateteampool()")
  //       // console.log(res.data)
  //       this.teamPool(this.state.teamName);
  //       // this.currentTeam();
  //     })
  //     .catch(err => console.log(err));

  // };

  // currentTeam = (teamName) => {
  //   // this check to see if addedToTeam is true/false, if true add to the currentTeam[]
  //   let tempArray = [];

  //   this.setState({
  //     currentTeamArray: []
  //   })

  //   API.getSpecificTeamPool(teamName)
  //     .then(res => {
  //       console.log("??????? this is the return for getspecificteampool()")
  //       console.log(res.data)
  //       // here sort and display only employees where addedtoteam is true
  //       for (var i = 0; i < res.data.length; i++) {
  //         if (res.data[i].addedToTeam === true) {
  //           console.log(`this one matches ${res.data[i].firstName}`)
  //           tempArray.push(res.data[i]);
  //           this.setState({
  //             currentTeamArray: tempArray
  //           })
  //         }
  //       }
  //     })

  //     .catch(err => console.log(err));

  // };







  // submitTeam = () => {
  //   // console.log("submitting team")
  //   new Promise((resolve, reject) => {
  //     for (var i = 0; i < this.state.currentTeamArray.length; i++) {


  //       // need to find the correct _id from the employee collection to update here!!!!!!
  //       //   employeeNumber: this.state.currentTeamArray[i].employeeNumber
  //       //    _id: this.state.currentTeamArray[i]._id
  //       API.updateTeam(this.state.teamName, 
  //         { 
  //           firstName: this.state.currentTeamArray[i].firstName,
  //           lastName: this.state.currentTeamArray[i].lastName,
  //           employeeNumber: this.state.currentTeamArray[i].employeeNumber,
  //           assets: this.state.currentTeamArray[i].assets,
  //         }
  //         )
  //         .then(res => {
  //           // console.log("added to team collection array")
  //         })
  //         .catch(err => console.log(err));


  //       // changing available status to false in employee collection
  //       this.updateAvailability(this.state.currentTeamArray[i].employeeNumber)



  //     }
  //     resolve(this.redirectViewTeamPage());
  //   })

  // };

  // updateAvailability = (employeeNumber) => {
  //   console.log(`this is the employee number for changing availability: ${employeeNumber}`);

  //   let data = {
  //     available: false
  //   };

  //   API.updateEmployee(employeeNumber, data)
  //     .then(res => {
  //       console.log("changed available to false")
  //       console.log(res.data);
  //     })
  //     .catch(err => console.log(err));

  // };




  // redirectViewTeamPage = () => {
  //   this.props.history.push({
  //     pathname: "/viewteam",
  //     state: {
  //       teamName: this.state.teamName
  //     }
  //   });
  // };

  render() {
    return (
      <div >
        <Nav />
        <br />
        <br />
        <br />
        <br />
        <br />

        {/* <CreateStatusBar modify="Select Team Members" /> */}

        <hr />
        <div>Select a team to modify</div>

        





      </div>
    );
  }
}

