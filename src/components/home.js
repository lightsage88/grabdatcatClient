import React, { Component } from 'react';
// import './app.css';
import './home.css';
import './navBar.css';


import NavBar from './navBar';
import {BrowserRouter as Router, Redirect} from 'react-router-dom';
import HomeGreet from './homeGreet';
import SearchForm from './searchForm';
import {persistData} from '../actions/index.js';
// import CatSuggestion from './catSuggestion';
import searchPicture from '../staticAssets/gitHubIcon.png';
import {connect} from 'react-redux';
import SearchResults from './searchResults';


export class Home extends Component {
componentDidMount(){
    const mLabId = localStorage.getItem('_id');
    this.props.dispatch(persistData(mLabId));
  }


render() {
    console.log('home running...');
    if(localStorage.token){
    } else {
      return(
      <Router>
      <Redirect to="/"/>
      </Router>
      );
    }
   
return (
    <div className='App'>
      <NavBar />
      <HomeGreet  firstName={this.props.userName}/>
      <SearchForm id='theTrueSearchForm' pic={searchPicture}/>
      <SearchResults />
    </div>
    );
  }
}

const mapStateToProps = state => ({
  userName : state.app.user.username
});

export default connect(mapStateToProps)(Home);
