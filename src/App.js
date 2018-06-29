import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation';
import Welcome from './Pages/Welcome';
import LoginForm from './Components/LoginForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Route exact path="/" component={ Welcome } />
          <Route path="/login" component={ LoginForm } />
        </div>
      </Router>
    );
  }
}

export default App;
