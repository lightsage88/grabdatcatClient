import React, { Component } from 'react';
import './app.css';
import {selectCat} from '../actions/index';
import {connect} from 'react-redux';
import {Button, Fade} from 'reactstrap';


export class SearchResults extends Component {
  constructor(props){
    super(props);
    this.state = {
      duplicateWarning: false
    }
  }

  addACat(petId){
    console.log('addACat running...');
    let id = petId;
    let searchResultArray = this.props.results;
    //what is already in the redux state for the user/pets
    let userPets = this.props.userPets;  
    console.log(userPets);
    let cat;
    let mLabId = localStorage.getItem('_id');
      let idChain = [];
    let unique = false;



    for(let i=0; i<=searchResultArray.length-1; i++){
        if(searchResultArray[i].id===id){
          cat = searchResultArray[i];
        }
    }

    console.log(cat);
    if(userPets.length === 0){
        console.log('first cat!');
        this.props.dispatch(selectCat(cat, userPets, mLabId));
        return;
        console.log('you should not see me');
    }
    console.log('you should not see me either');
    for(let i=0; i<=userPets.length-1; i++){
      idChain.push(userPets[i].id);
    }
      
      console.log(cat.id);
      console.log(idChain);
      idChain.forEach((id)=>{

        if(cat.id===id){
          unique = false;
          console.log('duplicates shit found');
          console.log(unique);
          this.setState({
                duplicateWarning: true
              });
              setTimeout(()=>{
                this.setState({
                  duplicateWarning : false
                })
              }, 2000);
        return;  
        console.log('you should not see me too');    
        } else {
          console.log(unique);
          unique = true;
          console.log(unique);
        }
        return;
        });
        console.log(unique);
        if(unique){
        this.props.dispatch(selectCat(cat, userPets, mLabId));
      }
      

    }
  



 
  
  

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
      <Fade in={this.state.duplicateWarning} tag='h5' className='mt-3 duplicateWarning'>
        You already hab dis kitteh in your kennel, hooman!
      </Fade>
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
