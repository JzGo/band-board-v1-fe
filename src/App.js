import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation';
import Welcome from './Pages/Welcome';
import Member from './Pages/MemberContainer';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Route exact path="/" component={ Welcome } />
          <Route path="/member" component={ Member } />
          <Route path="/login" component={ LoginForm } />
          <Route path="/register" component={ RegisterForm } />
        </div>
      </Router>
    );
  }
}

export default App;
