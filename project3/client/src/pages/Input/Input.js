import React, {Component} from 'react';  
import API from '../../utils/API';

/* Import Components */

export default class Form extends React.Component {
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
  API.addNewCompany({
    company: this.state.company,
    searchWords: this.state.searchWords
  })
  console.log("hello I am showing up");
  this.setState({
    company: '',
    searchWords: '',
    input: ''
  })
}

render() {
  return (
  <form>                                           
      <input
      name='company' 
      placeholder='company name' 
      value={this.state.company} 
      onChange={event => this.change(event)} 
      />
      <br />
       <input
      name='searchWords' 
      placeholder='key words' 
      value={this.state.searchWords} 
      onChange={event => this.change(event)}
      />
      <br />
      <input
      name='input' 
      placeholder='input' 
      value={this.state.input} 
      onChange={event => this.change(event)}
      />
      <br /> 
      <input
      name='company' 
      placeholder='company name' 
      value={this.state.company} 
      onChange={event => this.change(event)}
      />
      <br /> 

      <button onClick={this.onSubmit}>Submit</button>
    </form>
   );
 }
}
