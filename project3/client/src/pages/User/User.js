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
        <div>This page need links to
          1-create team page
          2- view teams page
          3- admin page
  </div>

        <a href="/create">Create a New Team</a>
        <a href="/viewteam">View Teams</a>
        <a href="/admin">Admin Page</a>
      </div>
    );
  }
}
