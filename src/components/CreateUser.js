import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateUser extends Component {

  static propTypes = {
    toGetUser: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired
  }

  state = {
    firstName: {
      value: null,
      isEmpty: true
    },
    lastName: {
      value: null,
      isEmpty: true
    },
    userName: {
      value: null,
      isEmpty: true
    }
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (value) {
      this.setState({
        [name]: {
          value: value,
          isEmpty: false
        }
      });
    }else {
      this.setState({
        [name]: {
          value: null,
          isEmpty: true
        }
      });
    }
  }

  createUserObject = () => {
    let user = {};
    user.firstName = this.state.firstName.value;
    user.lastName = this.state.lastName.value;
    user.userName = this.state.userName.value;
    this.props.toGetUser(user)
    this.props.toggleForm()

  }

  addUser = event => {
    event.preventDefault();
    // Check for empty inputs
    for (const key in this.state) {
      if (this.state[key].isEmpty) {
        return alert(`${key} is required!`);
      }
    }
    this.createUserObject();
   }

  render() {
    return (
      <form>
        <label>
          First Name:
          <input type="text"
            name="firstName"
            required
            onChange={this.handleInputChange} />
        </label>
        <label>
          Last Name:
          <input type="text"
            name="lastName"
            required
            onChange={this.handleInputChange} />
        </label>
        <label>
          Username:
          <input type="text"
            name="userName"
            required
            onChange={this.handleInputChange} />
        </label>
        <input type="submit"
          value="Add User"
          onClick={this.addUser}/>
      </form>
    );
  }
}

export default CreateUser;