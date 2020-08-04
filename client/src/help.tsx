import React, { Component } from 'react';

class Help extends React.Component {
  componentDidMount() {
    document.title = 'Help | Ruby on Rails Tutorial Sample App';
  }

  render() {
    return (
      <div>
        <h1>Help</h1>
        <p>
          Get help on the Ruby on Rails Tutorial at the
          <a href="https://railstutorial.jp/help">Rails Tutorial help page</a>. To get help on this sample app, see the
          <a href="https://railstutorial.jp/#ebook">
            <em>Ruby on Rails Tutorial</em>
          </a>
        </p>
      </div>
    );
  }
}

export default Help;
