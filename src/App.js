import './App.css';
import logo from './logo.svg';
import StudentForm from './StudentForm';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <StudentForm />
      </div>
    );
  }
}

export default App;
