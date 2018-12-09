import React, { Component } from 'react';
import API from '../../utils/API';
import "./ModifyTeam.css";

/* Import Components */

export default class ModifyTeam extends React.Component {
  state = {
    teamPoolArray: [],

    currentTeamArray: [],
  };

  componentDidMount = () => {
    this.teamPool();
    this.currentTeam();
  };

  teamPool = () => {
    API.getTeamPool()
      .then(res => {
        console.log("this is the return for getteampool()")
        console.log(res.data)
        this.setState({
          teamPoolArray: res.data
        })
        this.currentTeam();
      })
      .catch(err => console.log(err));
  };


  change = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

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

  submitTeam = () => {
    console.log("submitting team")
    for(var i = 0; i < this.state.currentTeamArray.length; i++) {
      API.saveTeam({
        // gotta figure out getting teh data here

        // teamName: { type: String },
        // manager: { type: String },
        // startDate: { type: String },
        // endDate: { type: String },
        
        // members: [ {
        //   type: Schema.Types.ObjectId,
        //   ref: "Employees"
        // } ],




      })

    }


    


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
        <h1 className="text-center">Team Pool</h1>
        
        <br />

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
              <br/>
              <div className="text-center">
              <button onClick={this.submitTeam}>Save Team</button>
              </div>


                </div>
            ) : (
                <div>No team members selected yet bro</div>
              )}



          </div>

        </div>



      </div>
    );
  }
}
