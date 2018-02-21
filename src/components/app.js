import React, { Component } from 'react';
import './app.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Landing from './landing';
import Home from './home';
import Registration from './registration';
import Account from './account';
import Kennel from './kennel';

export default class App extends Component {
  render() {
    console.log(this.props);
    console.log(this.props.accountData);
    return (
    <Router>
      <main>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/registration' component={Registration} />
        <Route exact path='/account' component={Account} />
        <Route exact path='/kennel' component={Kennel} />
      </main>
   </Router>
    );
  }
}

