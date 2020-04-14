import React, { Component } from "react";
import { TextInput, Button, Icon } from "react-materialize";
import "./loginForm.css";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.saveUsername = this.saveUsername.bind(this);
    this.updateState = this.updateState.bind(this);

    this.state = {
      username: ""
    };
  }

  updateState(event) {
    this.setState({ username: event.target.value });
  }

  saveUsername() {
    localStorage.setItem("username", this.state.username);
  }

  render() {
    return (
      <div className="center form-box login border">
        <TextInput onChange={this.updateState} label="Username" />
        <div className="center">
          <Button
            node="button"
            type="submit"
            waves="light"
            onClick={this.saveUsername}
          >
            Play
            <Icon right>send</Icon>
          </Button>
        </div>
      </div>
    );
  }
}
