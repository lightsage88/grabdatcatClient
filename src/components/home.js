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
import {Redirect} from 'react-router-dom';
import HomeGreet from './homeGreet';
import SearchForm from './searchForm';
import searchPicture from '../staticAssets/gitHubIcon.png';
import store from '../store';
import {connect} from 'react-redux';


export class Home extends Component {
  render() {
    console.log('home running...');
    console.log(this.props);
    if(localStorage.token){
      console.log('yippie');
    } else {
      return(
      <Redirect to="/"/>
      );
    }
    console.log(this.props);
    console.log(this.props.data);
    console.log(store);
    console.log(this.state);
    return (
    <div>
      <NavBar />
      <HomeGreet firstName={this.props.firstName}/>
      <SearchForm pic={searchPicture}/>
    </div>
      );
  }
}

const mapStateToProps = state => ({
  firstName : state.app.user.firstName
});


export default connect(mapStateToProps)(Home);
