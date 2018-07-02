import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Nav,
  Navbar,
  NavItem
} from 'react-bootstrap';
import AuthService from '../services/AuthService';

const Auth = new AuthService()

export default class Navigation extends Component {

  logout() {
    Auth.logout();
  }

  render(){
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            { Auth.loggedIn()
              ? <a href="/member">Band Board</a>
              : <a href="/">Band Board</a>
            }
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            { !Auth.loggedIn()
              ? <NavItem eventKey={1} href="/login" >
                  Login | Register
                </NavItem>
              : <NavItem eventKey={2} onClick={() => {this.logout()}} >
                  Logout
                </NavItem>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
