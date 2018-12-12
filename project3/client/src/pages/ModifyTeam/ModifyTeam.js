import React, { Component } from 'react';
import API from '../../utils/API';
import "./ModifyTeam.css";
import CreateStatusBar from '../../components/CreateStatusBar';
import Nav from '../../components/Nav';



export default class ModifyTeam extends React.Component {
  state = {
    teamArray: [],
    teamNamesArray: [],

    showTeam: false,

  };

  componentDidMount = () => {
    // this.teamPool();
    // this.currentTeam();
    this.getTeamNames();
  };

  getTeamNames = () => {
    API.getTeam()
      .then(res => {
        console.log("this is the return for geting teams to create a name list")
        console.log(res.data)



      })
      .catch(err => console.log(err));
  }


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

        <div className="row">
          <div className="col-6">
            <div>Select team to view</div>

          </div>

          <div className="col-6">
            <div>Team Members</div>

          </div>

        </div>







      </div>
    );
  }
}

