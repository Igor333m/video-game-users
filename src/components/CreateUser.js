import React, { Component } from 'react';

class CreateUser extends Component {

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

  addUser = event => {
    event.preventDefault();
    for (const key in this.state) {
      if (this.state[key].isEmpty) {
        return alert(`${key} is required!`);
      }
    }

    alert("KUL");
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