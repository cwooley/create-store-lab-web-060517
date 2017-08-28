import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    username: '',
    hometown: ''
  }

  usernameChanged = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  hometownChanged = (e) => {
    this.setState({
      hometown: e.target.value
    })
  }

  formSubmitted = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      payload: {
                username: this.state.username,
                hometown: this.state.hometown
              }
    })
  }

  render() {
    return(
      <form onSubmit={this.formSubmitted}>
        <input type='text' onChange={this.usernameChanged} placeholder="Username" />
        <input type='text' onChange={this.hometownChanged} placeholder="Hometown" />
      </form>
    );
  }
};

export default UserInput;
