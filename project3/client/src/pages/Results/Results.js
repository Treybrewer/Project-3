import React, {Component} from 'react';  
import API from '../../utils/API';
import "./results.css";

/* Import Components */

export default class Results extends React.Component {
  state = {
    company: '',
    searchWords: '',
    input: ''
  }

change = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  });
}

onSubmit = event => {
  event.preventDefault();
 
}

render() {
  return (
      <div></div>
  )
 }
}

