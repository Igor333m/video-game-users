import React, { Component } from 'react';
import CreateUser from './CreateUser';

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
      <section>
        {this.state.addUserToogle ? <CreateUser /> : null}
        <button
          onClick={this.toggle}
        >{!this.state.addUserToogle ? 'Add User' : 'Hide form'}</button>
      </section>
    );
  }
}

export default AddUser;