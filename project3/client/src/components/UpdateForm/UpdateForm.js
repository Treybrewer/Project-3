import React, { Component } from "react";
import Input from "../Form/index";


const UpdateForm = (props) => (

  <div>
    <p>Update Form for: {props.company}</p>
    <br />
    <br />
    <div>This is the current company Name: {props.company}.</div>
    <div>To make changes, enter new name below:</div>
    <form className="form">

      {/* <Input
        value={this.state.newCompanyName}
        onChange={this.handleInputChange}
        name="newCompanyName"
        placeholder="Enter New Company Name"
      /> */}

      <input
        value={props.newCompanyName}
        name="newCompanyName"
        onChange={props.handleInputChange}
        type="text"
        placeholder="New Company Name"
      />
      <br />
      <br />
      <div>These are the current search words:</div>
      <div>{props.searchWords}</div>
      <div>To make changes, enter all new search words below.</div>

      {/* <Input
        value={this.state.newSearchWords}
        onChange={this.handleInputChange}
        name="newSearchWords"
        placeholder="Enter all search words"
      /> */}


      <input
        value={props.newSearchWords}
        name="newSearchWords"
        onChange={props.handleInputChange}
        type="text"
        placeholder="Enter New Search Words"
      />
      <br />
      <br />

      <button onClick={props.handleFormSubmit}>Submit</button>
    </form>
  </div>
);

export default UpdateForm;


