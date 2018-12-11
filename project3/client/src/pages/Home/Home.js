import React, { Component } from 'react';
import API from '../../utils/API';
import "./home.css";
import image from "./iconfinder_General_Office_18_3592864.png";
import clock from "./iconfinder_General_Office_44_3592849.png";
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Nunito Sans: 300,400,700', 'sans-serif']
    }
})
/* Import Components */

export default class Home extends React.Component {

  componentDidMount = () => {
    sessionStorage.clear();
  };

  saveUserName = (name) => {
    sessionStorage.setItem("name", name);
  };

  render() {
    return (
      <div>
       
        <div id="hero">
          <div id="hero-overlay">
            <div id="blur-section">
            <h1> <a href="/start">HORSESHOE SOLUTIONS</a></h1>
            <h2> All of your business sampling needs </h2>
          </div>
            </div>
        </div>
        <section id="section-a">
          <img src={image} />
            <h2>Offering business solutions that cause greater efficiency in time and labor implementing our propietary application.</h2>
       </section>
       <section id="section-b">
       <img src={clock} />
            <h2>Implementing the Horshoe product will cut time spent on unwanted tasks and help free up your most valuable asset, time.</h2>
       </section>


      </div>
    );
  }
}
