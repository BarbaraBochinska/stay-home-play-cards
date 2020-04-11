import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize";

export default class Nav extends Component {
  render() {
    return (
      <Navbar
        alignLinks="right"
        brand={<a className="brand-logo">Table 666</a>}
        centerLogo
        className="light-blue lighten-2"
      >
        <NavItem>{localStorage.getItem("username")}</NavItem>
      </Navbar>
    );
  }
}
