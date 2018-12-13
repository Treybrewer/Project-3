import React, { Component } from 'react';
import API from '../../utils/API';
import "./ViewAllEmployees.css";
import CreateStatusBar from '../../components/CreateStatusBar';
import AdminNav from '../../components/AdminNav';

export default class ViewAllEmployees extends React.Component {
  state = {
    employeesArray: [],
    details: false,

  };

  componentDidMount = () => {
    this.getAllEmployees();
  };

  getAllEmployees = () => {
    API.getAllEmployees()
      .then(res => {
        console.log("this is the return for get all employees")
        console.log(res.data)


        this.setState({
          employeesArray: res.data
        })
      })
      .catch(err => console.log(err));
  };

  findSpecificEmployee = (_id) => {
    this.setState({
      details: true
    })
    console.log("hellow")
    console.log(_id)
    API.getSpecificEmployee(_id)
    .then(res => {
      console.log("this is the return for get specific employees")
      console.log(res.data)


      // this.setState({
      //   employeesArray: res.data
      // })
    })
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div >
        <AdminNav />
        <br />
        <br />
        <br />
        <br />
        <br />

        {/* <CreateStatusBar modify="Select Team Members" /> */}

        <hr />
        <div>All Employees</div>

        <div className="row">
          <div className="col-6">

            <ul>
              {this.state.employeesArray.map(person => (
                <li onClick={() => this.findSpecificEmployee(person.employeeNumber)} key={person.teamName}>
                  {person.firstName} {person.lastName}

                </li>
              ))}
            </ul>
          </div>

          <div className="col-6">
          {this.state.details ? (

<div>

  </div>


          ) : (

            <div>Click Employee to View Information</div>
          )}
          
          
          </div>

        </div>

      </div>
    );
  }
}



