import './App.css';

import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
      <header className="App-header">
        <p>
          testing app
        </p>
      </header>
    </div>
    );
  }
}

export default App;
