import React, { Component } from 'react';
import API from '../../utils/API';
import "./StartPage.css";
import LandingPageNav from '../../components/LandingPageNav';
import Image1 from './hierarchy.svg';
import Image2 from './management.svg';
import Image3 from './id.svg';
import Image4 from './monitoring.svg';


export default class StartPage extends React.Component {


  render() {
    return (
      <div>
        <LandingPageNav />
        <div className="form-style">
          <div class="container">
            <div class="row align-items-start">
              <div class="col-xs-12 m-4">
                <img src={Image1}></img>
                <a href="/build" className="btn btn-outline-success"><h1>Building a Team</h1></a>
              </div>
              <div class="col-xs-12 m-4">
                <img src={Image4}></img>
                <a href="/viewteam" className="btn btn-outline-success"><h1>View Team</h1></a>
              </div>
              <div class="col-xs-12 m-4">
                <img src={Image2}></img>
                <a href="/modify" className="btn btn-outline-success"><h1>Modify Team</h1></a>
              </div>
              <div class="col-xs-12 m-4">
                <img src={Image3}></img>
                <a href="/admin" className="btn btn-outline-success"><h1>Admin Page</h1></a>
              </div>
            </div>
          </div>
        </div>
      </div>
        );
      }
    }
