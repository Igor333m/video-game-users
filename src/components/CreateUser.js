import React, { Component } from 'react';

class CreateUser extends Component {

  state = {
    firstName: null,
    lastName: null,
    userName: null
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
console.log("target: ", target);
console.log("value: ", value);

  if (!name) {  
console.log("name: ", name);
    }else {
      this.setState({
        [name]: value
      }); 
    }
  }

  addUser = event => {
    event.preventDefault();
console.log('this.state: ', this.state);
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