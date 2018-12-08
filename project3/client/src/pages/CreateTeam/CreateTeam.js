import React, { Component } from 'react';
import API from '../../utils/API';
import "./CreateTeam.css";

/* Import Components */

export default class CreateTeam extends React.Component {
  state = {
    teamName: '',
    teamStartDate: '',
    teamEndDate: '',
    language_1: "",
    skill_1: "",
    language_2: "",
    skill_2: "",
    language_3: "",
    skill_3: "",
    language_4: "",
    skill_4: "",
    language_5: "",
    skill_5: "",
    manager: "",
    dateCreated: "",

    assetsArray: [],

  }

  change = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit = event => {
    event.preventDefault();

    let data = [];

    if (this.state.language_1) {
      data.push({
        language_1: this.state.language_1,
        skill_1: this.state.skill_1
      })
    }

    if (this.state.language_2) {
      data.push({
        language_2: this.state.language_2,
        skill_2: this.state.skill_2
      })
    }

    if (this.state.language_3) {
      data.push({
        language_3: this.state.language_3,
        skill_3: this.state.skill_3
      })
    }

    if (this.state.language_4) {
      data.push({
        language_4: this.state.language_4,
        skill_4: this.state.skill_4
      })
    }

    if (this.state.language_5) {
      data.push({
        language_5: this.state.language_5,
        skill_5: this.state.skill_5
      })
    }


    API.addNewTeam({
      teamName: this.state.teamName,
      teamStartDate: this.state.teamStartDate,
      teamEndDate: this.state.teamEndDate,
      manager: this.state.manager,
      assets: data,

    })
      .then(res => {
        console.log("this is the return for create new team")
        console.log(res.data)
        // redirect to user page
        this.resetState();
        this.redirectUserPage();
      })
      .catch(err => console.log(err));
 
  };

  resetState = () => {
    this.setState({
      teamName: '',
      teamStartDate: '',
      teamEndDate: '',
      language_1: "",
      skill_1: "",
      language_2: "",
      skill_2: "",
      language_3: "",
      skill_3: "",
      language_4: "",
      skill_4: "",
      language_5: "",
      skill_5: "",
      manager: "",
      dateCreated: "",

      assetsArray: [],
    })
  };


  redirectUserPage = () => {
    this.props.history.push("/user");
  };

  render() {
    return (
      <div >
        <br />
        <br />
        <br />
        <br />
        <br />

        <form>
          <h1 className="text-center">Create Project Team</h1>
          <br />
          <h4>What is the teams name?</h4>
          <input
            name='teamName'
            placeholder='"Team name"'
            value={this.state.teamName}
            onChange={event => this.change(event)}
          />
          <br />
          <h4>When will the team begin?</h4>
          <input
            name='teamStartDate'
            placeholder='"start date"'
            value={this.state.teamStartDate}
            onChange={event => this.change(event)}
          />
          <br />
          <h4>When will the team end?</h4>
          <input
            name='teamEndDate'
            placeholder='"end date"'
            value={this.state.teamEndDate}
            onChange={event => this.change(event)}
          />
          <br />


          <h4>Who is the team manager?</h4>
          <input
            name='manager'
            placeholder='"Team Manager"'
            value={this.state.manager}
            onChange={event => this.change(event)}
          />
          <br />
          <h3 className="text-center">What coding skill are required?</h3>
          <br />

          <div className="row">
            <div className="col-3"></div>
            <div className="col-3">
              <label for="language_1">Language 1</label>
              <br />
              <input
                name='language_1'
                placeholder='language_1'
                value={this.state.language_1}
                onChange={event => this.change(event)}
              />
            </div>

            <div className="col-3">
              <label for="skill_1">skill 1</label>
              <br />
              <input
                name='skill_1'
                placeholder='skill_1'
                value={this.state.skill_1}
                onChange={event => this.change(event)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-3"></div>
            <div className="col-3">
              <label for="language_2">Language 2</label>
              <br />
              <input
                name='language_2'
                placeholder='language_2'
                value={this.state.language_2}
                onChange={event => this.change(event)}
              />
            </div>

            <div className="col-3">
              <label for="skill_2">skill 2</label>
              <br />
              <input
                name='skill_2'
                placeholder='skill_2'
                value={this.state.skill_2}
                onChange={event => this.change(event)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-3"></div>
            <div className="col-3">
              <label for="language_1">Language 1</label>
              <br />
              <input
                name='language_3'
                placeholder='language_3'
                value={this.state.language_3}
                onChange={event => this.change(event)}
              />
            </div>

            <div className="col-3">
              <label for="skill_3">skill 3</label>
              <br />
              <input
                name='skill_3'
                placeholder='skill_3'
                value={this.state.skill_3}
                onChange={event => this.change(event)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-3"></div>
            <div className="col-3">
              <label for="language_4">Language 4</label>
              <br />
              <input
                name='language_4'
                placeholder='language_4'
                value={this.state.language_4}
                onChange={event => this.change(event)}
              />
            </div>

            <div className="col-3">
              <label for="skill_4">skill 4</label>
              <br />
              <input
                name='skill_4'
                placeholder='skill_4'
                value={this.state.skill_4}
                onChange={event => this.change(event)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-3"></div>
            <div className="col-3">
              <label for="language_5">Language 5</label>
              <br />
              <input
                name='language_5'
                placeholder='language_5'
                value={this.state.language_5}
                onChange={event => this.change(event)}
              />
            </div>

            <div className="col-3">
              <label for="skill_5">skill 5</label>
              <br />
              <input
                name='skill_5'
                placeholder='skill_5'
                value={this.state.skill_5}
                onChange={event => this.change(event)}
              />
            </div>
          </div>









          <br />

          <button onClick={this.onSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}