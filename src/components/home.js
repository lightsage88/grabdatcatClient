import React, { Component } from 'react';
// import './app.css';
import './home.css';
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
import {loginUserSuccess, persistData} from '../actions/index.js';
import CatSuggestion from './catSuggestion';
import searchPicture from '../staticAssets/gitHubIcon.png';
import {connect} from 'react-redux';
import SearchResults from './searchResults';


export class Home extends Component {

  // componentDidMount(){
  //  const authToken = localStorage.getItem('token');
  //  // const userData = localStorage.getItem('userData');
  //  const firstName = localStorage.getItem('firstName');
  //  const lastName = localStorage.getItem('lastName');
  //  const phoneNumber = localStorage.getItem('phoneNumber');
  //  const emailAddress = localStorage.getItem('emailAddress');
  //  const mBTI = localStorage.getItem('mBTI');
  //  const cats = localStorage.getItem('cats');
  //  const _id = localStorage.getItem('_id');
  //  console.log(firstName);
  //  this.props.dispatch(loginUserSuccess(authToken, firstName, lastName, phoneNumber, emailAddress, mBTI, cats, _id));
  // }

  componentDidMount(){
    const mLabId = localStorage.getItem('_id');
    this.props.dispatch(persistData(mLabId));
  }


  render() {
    console.log('home running...');
    if(localStorage.token){
    } else {
      return(
      <Redirect to="/"/>
      );
    }
   
    return (
    <div className='homeBody'>
      <NavBar />
      <CatSuggestion />
      <HomeGreet  firstName={this.props.firstName}/>
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
