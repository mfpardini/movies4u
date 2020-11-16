import './App.css';

import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import Routes from './routes';



class App extends Component {
  render() {
    return (
      <Routes />
      /*{ <div className="App">
        <NavigationBar />
        <header className="App-header">
          <p>
            testing app
        </p>
        </header>
      </div> }*/
    );
  }
}

export default App;
