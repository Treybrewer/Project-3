import React, { Component } from 'react';
import API from '../../utils/API';
import "./ViewTeam.css";
import CreateStatusBar from '../../components/CreateStatusBar';
import Nav from '../../components/Nav';

export default class ViewTeam extends React.Component {
  state = {
    teamName: "",
    teamArray: [],
  };

  // componentDidMount = () => {
  //   this.setTeamName();
  //   // this.getSpecificTeam(this.state.teamName)
  // };

  // setTeamName = () => {
  //   this.setState({
  //     teamArray: []
  //   });

  //   if (this.props.location.state.teamName) {
  //     this.setState({
  //       teamName: this.props.location.state.teamName
  //     })

  //   } else {
  //     this.setState({
  //       teamName: sessionStorage.getItem("sessionCompanyName")
  //     })
  //   };

  //   this.getSpecificTeam(this.state.teamName);

  // }


  // getSpecificTeam = (teamName) => {
  //   this.setState({
  //     teamArray: []
  //   })

  //   API.getSpecificTeam(teamName)
  //     .then(res => {
  //       console.log("this is the return for getSpecificteam()")
  //       console.log(res.data)
  //       this.setState({
  //         teamArray: res.data,
  //       })
  //     })
  //     .catch(err => console.log(err));
  // };

  // viewTeam = () => {
  //   this.getSpecificTeam(this.state.teamName);
  // };



  // change = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // };

  // onSubmit = event => {
  //   event.preventDefault();

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

        {/* <CreateStatusBar view="View Team Members" /> */}

        <hr />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <h3 className="text-center">Select Team to View</h3>


          </div>
        </div>
      </div>
    );
  }
}



