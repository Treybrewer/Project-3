import React, { Component } from 'react';
import API from '../../utils/API';
import "./ViewTeam.css";

/* Import Components */

export default class ViewTeam extends React.Component {
  state = {
    company: '',
    searchWords: '',
    input: ''
  }

  change = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit = event => {
    event.preventDefault();

    // this will remove spaces and ,'s from the searchwords input
    let searchWordsArray = [];
    searchWordsArray = this.state.searchWords.split(/[ ,]+/);
    console.log("this is the keywords array");
    console.log(searchWordsArray)
    //----------------------------------------------

    API.addNewCompany({
      company: this.state.company,
      searchWords: searchWordsArray
    })
      .then(res => {
        console.log("this is the return for addNewCompany()")
        console.log(res.data)

      })
      .catch(err => console.log(err));
    console.log("hello I am showing up");


    this.setState({
      company: '',
      searchWords: '',
      input: ''
    })
  }

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

        <div>List of team members</div>



      </div>
    );
  }
}
