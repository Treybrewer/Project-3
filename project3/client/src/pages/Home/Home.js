import React, { Component } from 'react';
import API from '../../utils/API';
import "./home.css";
import WebFont from 'webfontloader';
import Foot from '../../components/Foot';

WebFont.load({
  google: {
    families: ['Nunito Sans: 300,400,700', 'sans-serif']
  }
})
/* Import Components */

export default class Home extends React.Component {

  render() {
    return (
      <div>
        <div id="hero">
            <div id="blur-section">
              <h1> HORSESHOE SOLUTIONS</h1>
              <h2> All of your business sampling needs </h2>
            </div>
        </div>



        <Foot></Foot>

      </div>
    );
  }
}
