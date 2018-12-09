import React, { Component } from 'react';
import API from '../../utils/API';
import "./Admin.css";
import ResultsSelection from '../../components/ResultsSelection';
import ResultsList from '../../components/ResultsList';
import ResultsToolBar from '../../components/ResultsToolBar/ResultsToolBar';



/* Import Components */

export default class Admin extends React.Component {
  state = {


  };




  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <h1>admin page</h1>
        <div className="row">
          <div className="col-6">
            <br />
            <br />
            <br />
            <br />

            <div> this page links to
              1- manage employees page
              2- manage user/password page
            </div>
            <br />

            <a href="/addemployee">Add Employee</a>
            <br />
            <a href="/updateemployee">Update Employee</a>
            <br />
            <a href="/modifylogin">Update users/passwords</a>
            <br />
            <br />
            <a href="/user">Home</a>
          </div>

        </div>


      </div>
    )
  }
}

