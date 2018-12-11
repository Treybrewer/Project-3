import React, { Component } from "react";
import "./CreateStatusBar.css";


const CreateStatusBar = (props) => (

  <div>
    <h1 className="text-center">Develop your Team</h1>
    <div className="row">
      <div className="col-4 text-center">
        <h3 className="text-center">{props.requirements}</h3>
      </div>

      <div className="col-4 text-center">
        <h3 className="text-center">{props.modify}</h3>
      </div>

      <div className="col-4 text-center">
        <h3 className="text-center">{props.view}</h3>
      </div>

    </div>
  </div>

);

export default CreateStatusBar;


