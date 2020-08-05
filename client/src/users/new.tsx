import React, { Component } from 'react';

class Signup extends React.Component {
  componentDidMount() {
    document.title = 'Sign up | Ruby on Rails Tutorial Sample App';
  }

  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <p>This will be a signup page for new users.</p>
      </div>
    );
  }
}

export default Signup;
