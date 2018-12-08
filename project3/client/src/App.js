import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import User from "./pages/User";
import CreateTeam from "./pages/CreateTeam";
import AddEmployee from "./pages/AddEmployee";
import UpdateEmployee from "./pages/UpdateEmployee";
import ModifyLogin from "./pages/ModifyLogin";
import ViewTeam from "./pages/ViewTeam";




const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user" component={User} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/create" component={CreateTeam} />
        <Route exact path="/addemployee" component={AddEmployee} />
        <Route exact path="/updateemployee" component={UpdateEmployee} />
        <Route exact path="/modifylogin" component={ModifyLogin} />

        <Route exact path="/viewteam" component={ViewTeam} />


        {/* <Route component={NoMatch]]} /> */}
      </Switch>
    </div>
  </Router>


);

export default App;
