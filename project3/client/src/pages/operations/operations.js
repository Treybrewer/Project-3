import React, { Component } from 'react';
import API from '../../utils/API';
import UpdateForm from "../../components/UpdateForm";
// import "./operations.css";

/* Import Components */

export default class Operations extends React.Component {
  state = {
    company: '',
    searchWords: '',
    input: '',

    allCompanies: [],
    makeChanges: false,

    newCompanyName: '',
    newSearchWords: '',

  }

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
  };

  onSubmit = event => {
    event.preventDefault();

    let updatedCompany = '';
    let updatedSearchWords = [];

    if (this.state.newCompanyName === '') {
      updatedCompany = this.state.company;
    } else {
      updatedCompany = this.state.newCompanyName
    };

    if (this.state.newSearchWords === '') {
      updatedSearchWords = this.state.searchWords;
    } else {
      updatedSearchWords = this.state.newSearchWords;
      let searchWordsArray = [];
      searchWordsArray = this.state.newSearchWords.split(/[ ,]+/);
      // console.log("this is the keywords array");
      // console.log(searchWordsArray)
    };

    console.log(`
    this is the information sent to the updateCompany API:
     original company name: ${this.state.company}.
      data object: 
        company: ${updatedCompany}
        searchWords: ${updatedSearchWords}
        
        `)


    API.updateCompany(this.state.company,
      {
        company: updatedCompany,
        searchWords: updatedSearchWords
      })
      .then(res => {
        console.log("this is the return for updateCompany()")
        console.log(res.data)

      })
      .catch(err => console.log(err));
 

    this.setState({
      company: '',
      searchWords: '',
      makeChanges: false,
      newCompanyName: '',
      newSearchWords: '',
    })
  };

  makeChanges = (company, searchWords) => {
    console.log("company: " + company);
    console.log("searchwords:");
    console.log(searchWords);

    this.setState({
      makeChanges: true,
      company: company,
      searchWords: searchWords,

    })

  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6">
            <div>List of all companies</div>
            <ul>
              {this.state.allCompanies.map(company => (
                <li key={company.company}>
                  <div>Company Name: {company.company}</div>
                  <div>Search Terms: {company.searchWords}</div>
                  <button onClick={() => this.makeChanges(company.company, company.searchWords)}>Update Info</button>

                  <button onClick={() => this.removeCompany(company.company)}>Remove Company</button>

                  <button onClick={() => this.runSearch(company.company)}>Run Search</button>
                  <br></br>
                  <div>______________________________________</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6">
            {this.state.makeChanges ? (
              <div>
                <UpdateForm
                  
                  company={this.state.company}
                  searchWords={this.state.searchWords}

                  newCompanyName={this.state.newCompanyName}
                  newSearchWords={this.state.newSearchWords}

                  handleInputChange={this.change}
                  handleFormSubmit={this.handleFormSubmit}
                />


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

