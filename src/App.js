import React, { Component } from 'react';
import './App.css';
import AddUser from './components/AddUser';
import UserList from './components/UserList';

class App extends Component {

  state = {
    users: []
  }

  createContact = user => {
    user.numGamesPlayed = 0;
    this.setState(currState => ({
      users: [...currState.users, user]
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Video Game Users</h1>
        </header>
        <AddUser
          users={this.state.users}
          onAddUser={this.createContact}
        />
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;