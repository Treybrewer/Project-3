import React, { Component } from 'react';
import API from '../../utils/API';
import "./StartPage.css";
import LandingPageNav from '../../components/LandingPageNav';


export default class StartPage extends React.Component {


  render() {
    return (
      <div>
        <LandingPageNav />
        <div className="form-style">
          <br />
          <br />
          <br />
          <br />

          <div>This is the home page once the user has logged in.</div>


          <a href="/user">Begin Building a Team</a>
          <br />
          <a href="/admin">Admin Page</a>
          <br />
          

        </div>
      </div>
    );
  }
}
