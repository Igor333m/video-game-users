import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateUser extends Component {

  static propTypes = {
    toGetUser: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired,
    usernames: PropTypes.array.isRequired
  }

  state = {
    user: {
      firstName: '',
      lastName: '',
      username: ''
    },
    userExists: false
  }

  render() {
    const { firstName, lastName, username } = this.state.user;
    
    return (
      <div>
        <h1>New User</h1>
          <form>
            <label>
              First Name:
              <input type="text"
                name="firstName"
                value={firstName}
                onChange={this.handleInputChange} />
            </label>
            <label>
              Last Name:
              <input type="text"
                name="lastName"
                value={lastName}
                onChange={this.handleInputChange} />
            </label>
            <label>
              Username:
              <input type="text"
                name="userName"
                value={username}
                onChange={this.handleInputChange} />
            </label>
            <button>Add</button>
          </form>
      </div>
    );
  }
}

export default CreateUser;