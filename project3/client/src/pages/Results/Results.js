import React, {Component} from 'react';  
import API from '../../utils/API';
import "./results.css";

/* Import Components */

export default class Results extends React.Component {
  state = {
    allCompanies: [],
    showSearchingWindow: false,
    currentCompany: '',


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

runSearch = (company) => {
  console.log("running search");
  console.log(company);

  this.setState({
    showSearchingWindow: true,
    currentCompany: company,

  })

  API.runSpecificMatch(company)
  .then(res => {
    console.log("this is the return for runSpecificMatch()")
    console.log(res.data)
    
  })
  .catch(err => console.log(err));


};

closeWindow = () => {
  this.setState({
    showSearchingWindow: false,
  })
}

render() {
  return (
    <div>
      <h1>page to perform searches for selected company</h1>
    <div className="row">
      <div className="col-6">
        <div>List of all companies</div>
        <ul>
          {this.state.allCompanies.map(company => (
            <li key={company.company}>
              <div>Company Name: {company.company}</div>
              <div>Search Terms: {company.searchWords}</div>
              <button onClick={() => this.runSearch(company.company)}>Run Search</button>

              
              <br></br>
              <div>______________________________________</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-6">
        {this.state.showSearchingWindow ? (
          <div>
            <h1>Searching for matches for: {this.state.currentCompany}</h1>
            <br></br>
            <button onClick={this.closeWindow}>Close Search</button>


          </div>
        ) : (
            <div>nothing to show yet</div>
          )}
      </div>

    </div>








  </div>
  )
 }
}

