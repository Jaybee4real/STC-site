import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import "./index.scss";

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
