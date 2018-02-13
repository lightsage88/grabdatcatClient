import React, { Component } from 'react';
import './app.css';
import './searchResults.css';
import {selectCat} from '../actions/index';
import {connect} from 'react-redux';
import {Button, Fade} from 'reactstrap';


export class SearchResults extends Component {
  constructor(props){
    super(props);
    this.state = {
      duplicateWarning: false,
      catAdd: false
    }
  }

  addACat(petId){
    console.log('addACat running...');
    console.log(this.props);
    console.log(this.state);
    let id = petId;
    let searchResultArray = this.props.results;
    //what is already in the redux state for the user/pets
    let userPets = this.props.userPets;  
    console.log(userPets);
    let cat;
    let mLabId = localStorage.getItem('_id');
      let idChain = [];
    let unique = true;



    for(let i=0; i<=searchResultArray.length-1; i++){
        if(searchResultArray[i].id===id){
          cat = searchResultArray[i];
        }
    }

    console.log(cat);
    if((userPets.length === 0) || (userPets === undefined)){
        console.log('first cat!');
        this.props.dispatch(selectCat(cat, userPets, mLabId));
        return;
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
              }, 3500);
        return;  
       
        } else {
          console.log(unique);
          // unique = true;
          console.log(unique);
        }
        return;
        });
        console.log(unique);
        if(unique){
        this.setState({
                catAdd: true
              });
              setTimeout(()=>{
                this.setState({
                  catAdd : false
                })
              }, 3500);
        this.props.dispatch(selectCat(cat, userPets, mLabId));
      }
      

    }
  



 
  
  

  render() {


  //get pets in state and render a component around them...??
  if((!this.props.results)|| this.props.results.length===0 ){
    return(
      <div>
        <h4 className='resultsWillAppear'>Results will appear below</h4>
      </div>
      );
  } 


    return (
    <div className='searchResults'>
      <Fade in={this.state.duplicateWarning} tag='h5' className='mt-3 duplicateWarning'>
        You already hab dis kitteh in your kennel, hooman!
      </Fade>
      <Fade in={this.state.catAdd} tag='h5' className='mt-3 catAdd'>
        You have gained a new friend, hooman!
      </Fade>
      {this.props.results.map((pet, index)=>(
       <div key={index}>
          <li className='catEntry'>
            <h4 className='petInfo petName'>{pet.name}</h4>
            <img className='petMedia' src={pet.media} alt ='Cat' />
            <ul className='catDetails'>
              <li className='petInfo petAge'>AGE: {pet.age}</li>
              <li className='petInfo petSex'>GENDER: {pet.sex}</li>
              <li className='petInfo petBreed'>BREED: {pet.breed}</li>
              <li className='petInfo petEmail'>EMAIL: {pet.contactEmail}</li>
              <li className='petInfo petPhone'>PHONE: {pet.contactPhone}</li>
            </ul>
            <p>{pet.description}</p>
            <Button className='addCatButton' onClick={()=>this.addACat(pet.id)}>Add to Kennel</Button>

          </li>
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
