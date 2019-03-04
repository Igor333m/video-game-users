import React, { Component } from 'react';

class AddUser extends Component {

  state = {
    addUserToogle: false
  }

  toggle = () => {
    this.setState( prevState => {
      return {addUserToogle: !prevState.addUserToogle}
    });
  }

  render() {
console.log("this.state.addUserToogle: ", this.state.addUserToogle);
    return (
      <button
        onClick={this.toggle}
      >Add User</button>
    );
  }
}

export default AddUser;