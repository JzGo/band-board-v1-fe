import React, { Component } from 'react';
import {
  Nav,
  Navbar,
  NavItem
} from 'react-bootstrap'

export default class Navigation extends Component {
  render(){
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Band Board</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Login | Register
            </NavItem>
            <NavItem eventKey={2} href="#">
              Logout
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
