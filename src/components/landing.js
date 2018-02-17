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
import {connect} from 'react-redux';
import Image from './image';

export class Landing extends Component {
  render() {
    let validLogin = this.props.validLogin;
    console.log(validLogin);
    if(validLogin === false){
      return(
        <div className="App">
        <header className="App-header">
          <h1 className="App-title">GRAB DAT CAT</h1>
          <span>Find a cat to adopt and use Myers-Briggs personality tests to determine which
          cat breed will suit you best!</span>
          <br/><br/>
          <span className='testLogin'>Username: spiderman<br/>pw: 1234567890</span>
        </header>
        <LoginForm />
        <section className='cheekyCat'>
        <span className='notRegistered'>Oooh, hooman, you made a mistake, silleh hooman...</span>
        <br/>
        <Image className='notRegisteredPic' imageAddress={catPicture}/>
        </section>
      </div>
        
        );
    }


    return (
<div className="App">
        <header className="App-header">
          <h1 className="App-title">GRAB DAT CAT</h1>
          <span>Find a cat to adopt and use Myers-Briggs personality tests to determine which
          cat breed will suit you best!</span>
          <br/><br/>
          <span className='testLogin'>Username: spiderman<br/>pw: 1234567890</span>
        </header>
        <LoginForm />
        <section className='cheekyCat'>
        <span className='notRegistered'>Not registered? Click the register button to fix that, hooman.</span>
        <br/>
        <Image className='notRegisteredPic' imageAddress={catPicture}/>
        </section>
      </div>
      );
  }
}

const mapStateToProps = state => ({
  validLogin: state.app.user.validLogin
});

export default connect(mapStateToProps)(Landing);