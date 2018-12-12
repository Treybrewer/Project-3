import React, { Component } from "react";
import "./ModifyToolBar.css";


const ModifyToolBar = (props) => (

  <div>
    <h1>Select from an option below</h1>
    <div>Get all these links on one line</div>
    <br/>
    <div onClick={() => props.modifyData(props.teamName)}>Modify Team Data</div>
    <br/>
    <div onClick={() => props.deleteTeamMember(props.teamName)}>Remove Team Member</div>
    <br/>
    <div onClick={() => props.addTeamMember(props.teamName)}>Add Team Member</div>
    <br />
    <div onClick={props.back}>Back to Teams List</div>
    <br />
  </div>

);

export default ModifyToolBar;


