import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup
} from 'react-bootstrap'
import AuthService from '../services/AuthService';
import RegisterForm from '../Components/RegisterForm';

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
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFormSubmit(e) {
    e.preventDefault()
    this.Auth.login(this.state.email, this.state.password)
    .then(res => {
      this.props.history.replace('/member')
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
            <br/><br/>

            <Link to='/register' component={ RegisterForm } >Not Registered?</Link>
  
          </Col>
   
        </FormGroup>

  </Form>
    )
  }
}
