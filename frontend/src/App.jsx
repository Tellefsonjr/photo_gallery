import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CustomNavbar from './components/navbar';
import { Home } from './components/home';
import { About } from './components/about';
import { Gallery } from './components/gallery';

import './App.css';

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CustomNavbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />

        </div>
      </Router>
    );
  }
}

export default App;
