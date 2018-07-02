import React,  { Component } from 'react';
import {
  Button,
  Checkbox,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup
} from 'react-bootstrap'
import AuthService from '../services/AuthService';

export default class LoginForm extends Component {
  constructor() {
    super()
    this.Auth = new AuthService()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange(e) {
    console.log('updating')
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFormSubmit(e) {
    e.preventDefault()
    console.log('submitting')
    this.Auth.login(this.state.email, this.state.password)
    .then(res => {
      this.props.history.replace('/')
    })
      .catch(err => { alert(err) })
  }

  render() {
    return (
      <Form horizontal onSubmit={this.handleFormSubmit.bind(this)}>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl name="email" type="email" placeholder="Email" onChange={this.handleChange.bind(this)} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl name="password" type="password" placeholder="Password" onChange={this.handleChange.bind(this)} />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">Sign in</Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}
