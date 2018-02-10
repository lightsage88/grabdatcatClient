import React, { Component } from 'react';
import './app.css';
import {selectCat} from '../actions/index';
import {connect} from 'react-redux';
import {Button} from 'reactstrap';


export class SearchResults extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeButton : false
    }
  }

  addACat(petId){
    console.log('addACat running...');
    this.setState({
      activeButton: true
    });
    let id = petId;
    let catArray = this.props.results;
    let userPets = this.props.userPets;  
    let cat;
    let mLabId = localStorage.getItem('_id');
    console.log(mLabId);



    for(let i=0; i<=catArray.length-1; i++){
        if(catArray[i].id===id){
          console.log('creating cat entry...');
          cat = catArray[i];
          console.log(cat);
          console.log(userPets);
          this.props.dispatch(selectCat(cat, userPets, mLabId));
        }
      }
        
      
  }

    //         for(let x=0; x<=userPets.length-1; i++){
    //           if(userPets[x].id !== cat.id){
    //           console.log('this will fit');
    //         //dispatch action to put cat in state
    //           this.props.dispatch(addCat(cat));
    //           console.log(userPets)
    //           }
    //         }
    //     } else {
    //       this.props.dispatch(addCat(cat));
    //     }
        
    //   }
    // } 
  
  

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
       <div key={index}>
          <li>
            <h4>{pet.name}</h4>
            <h2>{pet.id}</h2>
            <img src={pet.media} alt ='Cat' />
            <ul>
              <li>{pet.age}</li>
              <li>{pet.sex}</li>
              <li>{pet.breed}</li>
              <li>email:{pet.contactEmail}</li>
              <li>phone:{pet.contactPhone}</li>
            </ul>
            <p>{pet.description}</p>
          </li>
          <Button  onClick={()=>this.addACat(pet.id)}>Add to Kennel</Button>
        </div>
        ))}
    </div>
    );
  }
}

const mapStateToProps = state => ({
  results: state.app.petsReducer.pets,
  userPets: state.app.user.cats
});


export default connect(mapStateToProps)(SearchResults);
