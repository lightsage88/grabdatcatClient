import React, { Component } from 'react';
import './app.css';
import './landing.css';
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
// import {Button} from 'reactstrap';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import LoginForm from './loginForm';
import catPicture from '../staticAssets/blackCatAroundCorner.jpg';

import Image from './image';

export default class Landing extends Component {
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
        <span className='notRegistered'>Not registered? Click the register button to fix that, hooman.</span>
        <br/>
        <Image className='notRegisteredPic' imageAddress={catPicture}/>
      </div>
      );
  }
}