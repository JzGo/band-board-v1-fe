import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Col, Grid } from 'react-bootstrap';
import AuthService from '../services/AuthService';

const Auth = new AuthService()

export default class Welcome extends Component {
  render() {
    return (
      <div>
        { Auth.loggedIn()
          ? <Grid id="dashboard">
            <Col>
              <h2>Dashboard</h2>
            </Col>
            </Grid>
          : <Redirect to="/login" />
        }
      </div>
    )
  }
}
