import React, { Component } from 'react';
import API from '../../utils/API';
import "./ModifyTeam.css";
import Axios from 'axios';

/* Import Components */

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

  componentDidMount = () => {
    // this.teamPool();
    // this.currentTeam();
  };



  teamPool = (name) => {
    // let name = "alpha";
    API.getSpecificTeamPool(name)
      .then(res => {
        console.log("this is the return for getspecificteampool()")
        console.log(res.data)
        this.setState({
          teamPoolArray: res.data,
        })
        this.currentTeam();
      })

      .catch(err => console.log(err));
  };


  // teamPool = () => {
  //   API.getAllTeamPool()
  //     .then(res => {
  //       console.log("this is the return for getteampool()")
  //       console.log(res.data)
  //       this.setState({
  //         teamPoolArray: res.data,
  //       })
  //       this.currentTeam();
  //     })

  //     .catch(err => console.log(err));
  // };


  // change = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // }

  addToTeam = (employeeNumber) => {
    console.log("this is the add to team #: " + employeeNumber);

    let data = {
      addedToTeam: true
    };

    API.updateTeamPool(employeeNumber, data)
      .then(res => {
        console.log("this is the return for updateteampool()")
        console.log(res.data)
        this.teamPool();
        // this.currentTeam();
      })
      .catch(err => console.log(err));
  };

  removeFromTeam = (employeeNumber) => {

    let data = {
      addedToTeam: false
    };

    API.updateTeamPool(employeeNumber, data)
      .then(res => {
        console.log("this is the return for updateteampool()")
        console.log(res.data)
        this.teamPool();
        // this.currentTeam();
      })
      .catch(err => console.log(err));

  };

  currentTeam = () => {

    this.setState({
      currentTeamArray: []
    })

    let tempArray = [];

    for (var i = 0; i < this.state.teamPoolArray.length; i++) {
      if (this.state.teamPoolArray[i].addedToTeam === true) {
        console.log(`this one matches ${this.state.teamPoolArray[i].firstName}`)
        tempArray.push(this.state.teamPoolArray[i]);
        this.setState({
          currentTeamArray: tempArray
        })
      }
    }


  };

  // need to get all this data saved to the team collection
  // it didnt send first/last name????

  // need to figure out why the page doesnt respond when clicking add to team buttons.

  submitTeam = () => {
    console.log("submitting team")
    for (var i = 0; i < this.state.currentTeamArray.length; i++) {
      API.saveTeam({
        teamName: this.state.currentTeamArray[i].teamName,
        manager: this.state.currentTeamArray[i].manager,
        startDate: this.state.teamStartDate,
        endDate: this.state.teamEndDate,
        firstName: this.state.currentTeamArray[i].firstName,
        lastName: this.state.currentTeamArray[i].lastName,
        employeeNumber: this.state.currentTeamArray[i].employeeNumber,
        assets: this.state.currentTeamArray[i].assets,

        manager: this.state.manager,
      })
        .then(res => {
          console.log("saved to team collection")
        })
        .catch(err => console.log(err));
    }
  };

  change = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  startBuildingTeam = (teamName) => {
    console.log(`start building ${teamName}.`)
    this.setState({
      startBuilding: true
    })

    this.teamPool(teamName);

    API.getSpecificTeamRequirements(teamName)
      .then(res => {
        console.log("this is the return for getspecificteam requirements()")
        console.log(res.data)
        this.setState({
          manager: res.data.manager,
          teamStartDate: res.data.teamStartDate,
          teamEndDate: res.data.teamEndDate,
        })
      })
      .catch(err => console.log(err));

  };



  redirectUserPage = () => {
    this.props.history.push("/user");
  };

  render() {
    return (
      <div >
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-center">Create Team</h1>

        <div className="row">
          <div className="col-4 text-center">
            <h3 className="text-center"></h3>
          </div>

          <div className="col-4 text-center">
            <h3 className="text-center">Select Team Members</h3>
          </div>

          <div className="col-4 text-center">
            <h3 className="text-center"></h3>
          </div>

        </div>

        <hr />

        <div>Enter Team Name</div>
        <input
          name='teamName'
          placeholder='"Enter team name"'
          value={this.state.teamName}
          onChange={event => this.change(event)}
        />
        <button onClick={() => this.startBuildingTeam(this.state.teamName)}>Start Building Team</button>

        <br />

        {this.state.startBuilding ? (

          <div className="row">
            <div className="col-6">
              <h4>Select team from this list</h4>
              <ul>
                {this.state.teamPoolArray.map(person => (
                  <li key={person.employeeNumber}>
                    <h4>{person.firstName} {person.lastName}</h4>

                    {!person.addedToTeam ? (
                      <button onClick={() => this.addToTeam(person.employeeNumber)}>Add To Team</button>
                    ) : (
                        <button onClick={() => this.removeFromTeam(person.employeeNumber)}>Remove From Team</button>
                      )}


                    <div>________________________</div>
                    <br />
                  </li>


                ))}
              </ul>

            </div>

            <div className="col-6">
              <h4>Current Team Members</h4>

              {this.state.currentTeamArray.length ? (
                <div>
                  <ul>

                    {
                      this.state.currentTeamArray.map(person => (
                        <li key={person.employeeNumber}>
                          <h4>{person.firstName} {person.lastName}</h4>

                          <br />
                        </li>


                      ))
                    }
                  </ul>
                  <br />
                  <div className="text-center">
                    <button onClick={this.submitTeam}>Save Team</button>
                  </div>


                </div>
              ) : (
                  <div>No team members selected yet bro</div>
                )}



            </div>

          </div>

        ) : (
            <div>no team selected</div>
          )}





      </div>
    );
  }
}
