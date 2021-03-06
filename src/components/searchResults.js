import React, { Component } from 'react';
import './app.css';
import './searchResults.css';
import {selectCat} from '../actions/index';
import {connect} from 'react-redux';
import {Button, Fade, Container, Row, Col} from 'reactstrap';


export class SearchResults extends Component {
constructor(props){
  super(props);
  this.state = {
    duplicateWarning: false,
    catAdd: false
  }
}

addACat(petId){
let id = petId;
let searchResultArray = this.props.results;
let userPets = this.props.userPets;  
let cat;
let mLabId = localStorage.getItem('_id');
let idChain = [];
let unique = true;

for(let i=0; i<=searchResultArray.length-1; i++){
    if(searchResultArray[i].id===id){
      cat = searchResultArray[i];
    }
}
if((userPets.length === 0) || (userPets === undefined)){
    this.props.dispatch(selectCat(cat, userPets, mLabId));
    this.setState({
      catAdd: true
    });
    setTimeout(()=>{
      this.setState({
        catAdd : false
      })
    }, 3500);
  return;
  }
    for(let i=0; i<=userPets.length-1; i++){
    idChain.push(userPets[i].id);
  }
  idChain.forEach((id)=>{
    if(cat.id===id){
      unique = false;
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
    }
    return;
    });
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
  let catPresent = this.props.catPresent;
  if(catPresent === false) {
    return(
      <div className='searchResults'>
      <Container>
      <Row>
      <Col>
        <h4 className='noCats'>Oh dear, no cats here...</h4>
      </Col>
      </Row>
      </Container>
      </div>
      );
}
  if((!this.props.results)|| this.props.results.length===0 ){
    return(
      <div>
        <Container>
        <Row>
        <Col>
        <h4 className='resultsWillAppear'>Results will appear here</h4>
        </Col>
        </Row>
        </Container>
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
    <Container>
    <Row>
      <li className='catEntry'>
        <h4 className='petInfo petName'>{pet.name}</h4>
        <img className='petMedia' src={pet.media} alt ='Cat' />
        <ul className='catDetails'>
          <li className='petInfo petAge'>AGE: {pet.age ? pet.age: 'N/A'}</li>
          <li className='petInfo petSex'>GENDER: {pet.sex ? pet.sex:'N/A'}</li>
          <li className='petInfo petBreed'>BREED:<br/> {pet.breed ? pet.breed:'N/A'}</li>
          <li className='petInfo petEmail'>EMAIL:<br/> {pet.contactEmail ? pet.contactEmail:'N/A'}</li>
          <li className='petInfo petPhone'>PHONE:<br/> {pet.contactPhone ? pet.contactPhone:'N/A'}</li>
        </ul>
        <p className='petDescription'>{pet.description}</p>
        <br/>
        <Button className='addCatButton' onClick={()=>this.addACat(pet.id)}>Add to Kennel</Button>

      </li>
      </Row>
      </Container>
    </div>)
  )
}
</div>);
  }
}

const mapStateToProps = state => ({
  results: state.app.petsReducer.pets,
  userPets: state.app.user.cats,
  catPresent: state.app.user.catPresent
  // catPresent: false
});


export default connect(mapStateToProps)(SearchResults);
