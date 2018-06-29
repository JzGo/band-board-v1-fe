import React, { Component } from 'react';
import { Col, Grid } from 'react-bootstrap';

export default class Welcome extends Component {
  render() {
    return (
        <Grid id="welcome">
          <Col>
            <h2>Hello! Welcome to Band Board!</h2>
            <p>Sign up to start managing your bands!</p>
          </Col>
        </Grid>
    )
  }
}
