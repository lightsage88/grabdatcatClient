import React, { Component } from 'react';
import './app.css';
import store from '../store';
import {petsSearchReset} from '../actions/index';
import {connect} from 'react-redux';


export class SearchResults extends Component {
  

  render() {

  //get pets in state and render a component around them...??
  if(!this.props.results){
    return(
      <div>
        <h4>Results will appear here</h4>
      </div>
      );
  } 
    return (
    <div>
      {this.props.results.map((pet, index)=>(
        <li key={index}>
          {pet.name}
          {pet.age}
          {pet.sex}
          {pet.breed}
          {pet.description}
          {pet.contactEmail}
          {pet.contactPhone}
        </li>

        ))}
    </div>
      );
  }
}

const mapStateToProps = state => ({
  results: state.app.petsReducer.pets
});


export default connect(mapStateToProps)(SearchResults);
