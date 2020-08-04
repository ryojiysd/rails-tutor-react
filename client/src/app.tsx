import React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './home';
import Help from './help';
import About from './about';

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
        </Switch>
      </BrowserRouter>
      <AppFooter />
    </div>
  );
};

const AppHeader = () => (
  <header className="navbar navbar-dixed-top navbar-inverse">
    <div className="container">
      <a href="#" id="logo"></a>
      <nav>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/help">Help</a>
          </li>
          <li>
            <a href="#">Log in</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

const AppFooter = () => (
  <div>
    <p>footer</p>
  </div>
);

export default App;
