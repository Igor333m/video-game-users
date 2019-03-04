import React, { Component } from 'react';
import './App.css';
import AddUser from './components/AddUser';

class App extends Component {

  state = {
    users: []
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Video Game Users</h1>
        </header>
        <AddUser />
      </div>
    );
  }
}

export default App;