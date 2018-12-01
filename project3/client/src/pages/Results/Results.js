import React, { Component } from 'react';
import API from '../../utils/API';
import "./results.css";
import ResultsSelection from '../../components/ResultsSelection';
import ResultsList from '../../components/ResultsList';
import ResultsToolBar from '../../components/ResultsToolBar/ResultsToolBar';


/* Import Components */

export default class Results extends React.Component {
  state = {
    allCompanies: [],
    showSearchingWindow: false,
    currentCompany: '',

    showResultsList: false,
    companyMatches: [],


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
      showResultsList: false,
      currentCompany: '',

    })
  }

  viewResults = (company) => {
    this.setState({
      showResultsList: true
    })
    console.log("getting ready to find company results")
    API.seeSpecificCompanyResult(company)
      .then(res => {
        console.log("this is the promise from specific company results");
        this.setState({
          companyMatches: res.data
        })
      })
  };

  render() {
    return (
      <div>
        <h1>page to perform searches for selected company</h1>
        <div className="row">
          <div className="col-6">

            <ResultsSelection
              allCompanies={this.state.allCompanies}
              runSearch={this.runSearch}
            />


          </div>

          <div className="col-6">
            {this.state.showSearchingWindow ? (
              <div>

                <ResultsToolBar
                  currentCompany={this.state.currentCompany}
                  closeWindow={this.closeWindow}
                  viewResults={this.viewResults}

                />

                {this.state.showResultsList ? (

                  <ResultsList
                    companyMatches={this.state.companyMatches}
                  />


                ) : (
                    <div></div>
                  )}


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

