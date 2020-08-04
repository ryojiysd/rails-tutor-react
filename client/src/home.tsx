import React from 'react';

class Home extends React.Component {
  componentDidMount() {
    document.title = 'Home | Ruby on Rails Tutorial Sample App';
  }

  render() {
    return (
      <div>
        <h1>Sample App</h1>
        <p>
          This is the home page for the
          <a href="https://railstutorial.jp/">Ruby on Rails Tutorial</a>
        </p>
      </div>
    );
  }
}

export default Home;
