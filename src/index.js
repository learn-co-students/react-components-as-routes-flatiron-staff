import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './components/about';
import Login from './components/login';
import Signup from './components/signup';
import Messages from './components/messages';
import Navbar from './components/navbar';

const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

ReactDOM.render(
  (<Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/messages" component={Messages} />
      </Switch>
    </div>
  </ Router>),
  document.getElementById('root')
);
