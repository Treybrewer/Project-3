import React, { Component } from 'react';
import API from '../../utils/API';
import "./ViewTeam.css";

/* Import Components */

export default class ViewTeam extends React.Component {
  state = {
    teamName: "",
    teamArray: [],
  };

  componentDidMount = () => {
    this.setTeamName();
    this.getTeam();
  };

  setTeamName = () => {
    console.log(this.props.location.state.teamName)
    this.setState({
      teamName: this.props.location.state.teamName
    })
  }


  getTeam = () => {
    API.getTeam()
      .then(res => {
        console.log("this is the return for getteam()")
        console.log(res.data)
        this.setState({
          teamArray: res.data,
        })
      })
      .catch(err => console.log(err));
  };



  change = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

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
            <h3 className="text-center"></h3>
          </div>

          <div className="col-4 text-center">
            <h3 className="text-center">View Team Members</h3>
          </div>

        </div>
        <hr />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <h3 className="text-center">Team Members</h3>
            <h4 className="text-center">Team: {this.state.teamName}</h4>

            {this.state.teamArray ? (
              <ul>
                {this.state.teamArray.map(person => (
                  <li key={person.employeeNumber}>
                    <h4>{person.firstName} {person.lastName}</h4>

                    {/* {!person.addedToTeam ? (
                      <button onClick={() => this.addToTeam(person.employeeNumber)}>Add To Team</button>
                    ) : (
                        <button onClick={() => this.removeFromTeam(person.employeeNumber)}>Remove From Team</button>
                      )} */}



                    <br />
                  </li>


                ))}
              </ul>
            ) : (
                <div>no Team to display</div>
              )}



          </div>
        </div>




      </div>
    );
  }
}
