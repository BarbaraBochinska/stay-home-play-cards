import React, { Component } from "react";
import { TextInput, Button, Icon } from "react-materialize";
import { Link } from "react-router-dom";

import "./loginForm.css";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.saveUsername = this.saveUsername.bind(this);
    this.updateState = this.updateState.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      username: ""
    };
  }

  updateState(event) {
    this.setState({ username: event.target.value });
  }

  handleClick() {
    this.saveUsername();
  }

  saveUsername() {
    localStorage.setItem("username", this.state.username);
  }

  render() {
    return (
      <div className="center form-box login border">
        <TextInput onChange={this.updateState} label="Username" />
        <div className="center">
          <Link to="/table">
            <Button
              node="button"
              type="submit"
              onClick={this.handleClick}
              className="light-blue accent-4"
            >
              Play
              <Icon right>send</Icon>
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
