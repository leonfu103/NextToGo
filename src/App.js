import React, { Component } from 'react';
import './App.css';
import RacesContainer from './containers/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Next To Go</h1>
        </div>
        <div className="App-body">
          <RacesContainer />
        </div>
      </div>
    );
  }
}

export default App;
