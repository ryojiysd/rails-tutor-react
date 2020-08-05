import React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './home';
import Help from './help';
import About from './about';
import Contact from './contact'

const App = () => {
  return <Router />;
};

const Router = () => {
  return (
    <div>
      <AppHeader />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/help" component={Help} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
      <AppFooter />
    </div>
  );
};

const AppHeader = () => (
  <header className="navbar navbar-expand-md navbar-fixed-top bg-dark">
    <div className="container">
      <a className="navbar-brand" href="#" id="logo">sample app</a>
      <nav>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/help">Help </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Log in </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

const AppFooter = () => (
  <footer className="footer">
    <small>
      The <a href="https://railstutorial.jp/">Ruby on Rails Tutorial</a>
      by <a href="http://www.michaelhartl.com/">Michael Hartl</a>
    </small>
    <nav>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="http://news.railstutorial.org/">News</a></li>
      </ul>
    </nav>
  </footer>
);

export default App;
