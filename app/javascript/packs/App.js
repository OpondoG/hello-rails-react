import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Greeting from "../components/Greeting";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Greeting} />
      </Switch>
    </Router>
  );
};

export default App;
