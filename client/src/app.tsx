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
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/help" component={Help} />
                <Route path="/about" component={About} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
