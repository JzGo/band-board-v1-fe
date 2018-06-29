import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Welcome from './Pages/Welcome';

class App extends Component {
  render() {
    return (
        <div>
          <Navigation />
          <Welcome />
        </div>
    );
  }
}

export default App;
