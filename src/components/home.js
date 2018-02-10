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
import CatSuggestion from './catSuggestion';
import searchPicture from '../staticAssets/gitHubIcon.png';
import store from '../store';
import {connect} from 'react-redux';
import SearchResults from './searchResults';


export class Home extends Component {
  render() {
    console.log('home running...');
    if(localStorage.token){
    } else {
      return(
      <Redirect to="/"/>
      );
    }
   
    return (
    <div>
      <NavBar />
      <CatSuggestion />
      <HomeGreet firstName={this.props.firstName}/>
      <SearchForm pic={searchPicture}/>
      <SearchResults />
    </div>
      );
  }
}

const mapStateToProps = state => ({
  firstName : state.app.user.firstName
});


export default connect(mapStateToProps)(Home);
