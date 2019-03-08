import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddUser extends Component {

  static propTypes = {
    onAddUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
  }

  state = {
    user: {
      firstName: '',
      lastName: '',
      username: ''
    },
    userExists: false
  }

  contactExists = currUsername => {
    const users = this.props.users;
    for (let user of users) {
      if (user.username === currUsername) {
        return true;
      }
    }
    return false;
  }

  handleSubmit = event => {
    event.preventDefault();
    const userExists = this.contactExists(this.state.user.username);

    if (!userExists) {
      this.props.onAddUser(this.state.user);
    }

    this.setState(() => ({
      userExists
    }));
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState(currState => ({
      ...currState,
      user: {
        ...currState.user,
        [name]: value,
      },
    }));
  }

  isDisabled = () => {
    const { firstName, lastName, username } = this.state.user;
    return firstName === '' || lastName === '' || username === '';
  }

  render() {
    const { firstName, lastName, username } = this.state.user;

    return (
      <div>
        <h1>New User</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleInputChange}
            />
          </label>
          <button disabled={this.isDisabled()}>Add</button>
        </form>
        {this.state.userExists ? (
          <p className="error">You cannot add a user that already exists.</p>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default AddUser;