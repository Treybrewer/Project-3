import React from "react";
import "./nav.css";
const Nav = () => (
  <nav>
   <div className="topNav">
    <a href="/">HorseShoe Business Solutions</a>
     {/* <a href="/">Home</a> */}
     <a href="/input">Input</a>
     <a href="/update">Update</a>
     <a href="/results">Search</a>
     <a href="/admin">Admin</a>
    </div>

    </nav>
);

export default Nav;
