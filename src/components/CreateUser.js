import React, { Component } from 'react';

class CreateUser extends Component {

  render() {
    return (
      <form>
        <label>
          First Name:
          <input type="text" name="name" />
        </label>
        <label>
          Last Name:
          <input type="text" name="name" />
        </label>
        <label>
          Username:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CreateUser;