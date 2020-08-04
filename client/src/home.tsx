import React from 'react';

class Home extends React.Component {
  componentDidMount() {
    document.title = 'Home | Ruby on Rails Tutorial Sample App';
  }

  render() {
    return (
      <div>
        <div className="center jumbotron">
          <h1>Welcome to the Sample App</h1>
          <h2>
            This is the home page for the
            <a href="https://railstutorial.jp/">Ruby on Rails Tutorial</a> sample application.
          </h2>

          <a href="#" className="btn btn-lg btn-primary">Sign up now!</a>
        </div>
        <a href="http://rubyonrails.org/"><img src="images/rails.png" alt="Rails logo"/></a>
      </div>
    );
  }
}

export default Home;
