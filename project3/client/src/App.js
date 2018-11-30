import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Input from "./pages/Input";
import Results from "./pages/Results";
import Update from "./pages/Update";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";





const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/update" component={Update} />
        <Route exact path="/input" component={Input} />
        {/* <Route exact path="/books/:id" component={Results} /> */}
        {/* <Route component={NoMatch]]} /> */}
      </Switch>
    </div>
  </Router>

  
);

export default App;
