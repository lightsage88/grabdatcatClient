import React, { Component } from 'react';
import './app.css';
import store from '../store';

import {connect} from 'react-redux';


export class SearchResults extends Component {
  render() {
  //get pets in state and render a component around them...??
    return (
    <div>
      {this.props.results.map((pet, index)=>(
        <li key={index}>
          {pet.sex}
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
