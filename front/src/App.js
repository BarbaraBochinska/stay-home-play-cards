import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginForm from "./components/forms/LoginForm";
import Nav from "./components/navbar/Nav";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={LoginForm} />
        <Route path="/table" component={Nav} />
      </Router>
    );
  }
}
