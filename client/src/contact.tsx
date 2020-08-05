import React from 'react';

class Contact extends React.Component {
  componentDidMount() {
    document.title = 'Contact | Ruby on Rails Tutorial Sample App';
  }

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <p>
          Contact the Ruby on Rails Tutorial about the sample app at the
          <a href="https://railstutorial.jp/contact">contact page</a>.
        </p>
      </div>
    );
  }
}

export default Contact;
