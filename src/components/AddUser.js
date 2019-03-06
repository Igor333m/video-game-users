import React, { Component } from 'react';
import CreateUser from './CreateUser';
import PropTypes from 'prop-types';

class AddUser extends Component {

  static propTypes = {
    addUser: PropTypes.func.isRequired
  }

  state = {
    addUserToogle: false
  }

  toggle = () => {
    this.setState( prevState => {
      return {addUserToogle: !prevState.addUserToogle}
    });
  }

  getUser = (user) => {
    this.props.addUser(user)
  }

  render() {
console.log("this.state.addUserToogle: ", this.state.addUserToogle);
    return (
      <section>
        {this.state.addUserToogle ? <CreateUser
          toGetUser={this.getUser}
          toggleForm={this.toggle}
        /> : null}
        <button
          onClick={this.toggle}
        >{!this.state.addUserToogle ? 'Add User' : 'Hide form'}</button>
      </section>
    );
  }
}

export default AddUser;