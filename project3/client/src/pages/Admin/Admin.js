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

  componentDidMount = () => {
    this.showAllCompanies();
  };

  showAllCompanies = () => {

    API.allCompanies()
      .then(res => {
        console.log("this is the return for showAllCompanies()")
        console.log(res.data)
        this.setState({
          allCompanies: res.data
        })
      })
      .catch(err => console.log(err));
  };

  change = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit = event => {
    event.preventDefault();

  };






  render() {
    return (
      <div>
        <h1>admin page</h1>
        <div className="row">
          <div className="col-6">

            <div> this page links to
              1- manage employees page
              2- manage user/password page
            </div>

            <a href="/employees">Manage employees</a>
            <a href="/modifylogin">Update users/passwords</a>
          </div>

        </div>


      </div>
    )
  }
}

