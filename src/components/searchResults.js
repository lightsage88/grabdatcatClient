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
        <div>
          <li key={index}>
            <h4>{pet.name}</h4>
            <img src={pet.media.photo[3].$t}/>
            <ul>
              <li>{pet.age}</li>
              <li>{pet.sex}</li>
              <li>{pet.breed}</li>
              <li>email:{pet.contactEmail}</li>
              <li>phone:{pet.contactPhone}</li>
            </ul>
            <p>{pet.description}</p>
            
          </li>
        </div>
        ))}
    </div>
      );
  }
}

const mapStateToProps = state => ({
  results: state.app.petsReducer.pets
});


export default connect(mapStateToProps)(SearchResults);
