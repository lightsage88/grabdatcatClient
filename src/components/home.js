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
// import {Button} from 'reactstrap';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './navBar';
import HomeGreet from './homeGreet';
import SearchForm from './searchForm';
import searchPicture from '../staticAssets/gitHubIcon.png';


export default class Home extends Component {
  render() {
    console.log(this.props);
    console.log(this.props.data);
    return (
    <div>
      <NavBar />
      <HomeGreet firstName={'Adrian'}/>
      <SearchForm pic={searchPicture}/>
    </div>
      );
  }
}