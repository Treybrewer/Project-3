import React, { Component } from 'react';
import API from '../../utils/API';
import "./User.css";

/* Import Components */

export default class User extends React.Component {
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
      <div className="form-style">
        <br />
        <br />
        <br />
        <br />

        <div>This is the home page once the user has logged in.</div>
        

        <a href="/create">Enter New Team Requirements</a>
        <br />
        <a href="/modify">Select Team Members</a>
        <br />
        <a href="/viewteam">View Team</a>
        <br />
        <br />
        <br />
        <br />
        <a href="/admin">Admin Page</a>
        <br />
       
      </div>
    );
  }
}
