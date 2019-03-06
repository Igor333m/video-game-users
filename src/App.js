import React, { Component } from 'react';
import './App.css';
import AddUser from './components/AddUser';

class App extends Component {

  state = {
    users: []
  }

  addUser = (user) => {
    this.setState(oldState => ({
      users: [...oldState.users, user]
    }));
console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Video Game Users</h1>
        </header>
        <AddUser 
          addUser={this.addUser}
        />
      </div>
    );
  }
}

export default App;