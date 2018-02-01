import React, { Component } from 'react';
import './app.css';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   Container,
//   Row,
//   Col,
//   Jumbotron,
//   Button
// } from 'reactstrap';
import {Button} from 'reactstrap';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LoginForm from './loginForm';
import Image from './image';

export default class App extends Component {
  render() {
    console.log(this.props);
    console.log(this.props.data);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GRAB DAT CAT</h1>
          <span>Find a cat to adopt and use Myers-Briggs personality tests to determine which
          cat breed will suit you best!</span>
        </header>
        <LoginForm />
        <span>Not registered, hooman? Click the register button to fix that, hooman.</span>
        <br/>
        <Image imageAddress={this.props.data.catKennel[0].catPic}/>
      </div>
    );
  }
}

// export default App;
