import React,  { Component } from 'react';
import {
  Button,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup
} from 'react-bootstrap'
import AuthService from '../services/AuthService';

export default class RegisterForm extends Component {
  constructor() {
    super()
    this.Auth = new AuthService()
    this.state = {
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFormSubmit(e) {
    e.preventDefault()
    this.Auth.register(this.state.username, this.state.email, this.state.password, this.state.password_confirmation)
    .then(res => {
      this.props.history.replace('/')
    })
      .catch(err => { alert(err) })
  }

  render() {
    return (
      <Form horizontal onSubmit={this.handleFormSubmit.bind(this)}>
        <FormGroup controlId="formHorizontalUsername">
              <Col componentClass={ControlLabel} sm={2}>
                Username
              </Col>
              <Col sm={10}>
                <FormControl name="username" type="username" placeholder="Username" onChange={this.handleChange.bind(this)} />
          </Col>
        </FormGroup>

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
        
        <FormGroup controlId="formHorizontalPasswordConfirmation">
          <Col componentClass={ControlLabel} sm={2}>
            Password Confirmation
          </Col>
          <Col sm={10}>
            <FormControl name="password_confirmation" type="password" placeholder="Password Confirmation" onChange={this.handleChange.bind(this)} />
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
