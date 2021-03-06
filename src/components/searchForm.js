import React from 'react';
import { Button, Form, FormGroup, Label, Input,Container, Row, Col } from 'reactstrap';
import {connect} from 'react-redux';
import {seekCat} from '../actions';
// import Image from './image';
import {petsSearchReset} from '../actions/index';
import './searchForm.css';
import './navBar.css';
import CatSuggestion from './catSuggestion';

export class SearchForm extends React.Component {
constructor(props){
  super(props);
  this.state = {
    breed : '',
    gender: '',
    age: '',
    zipCode: '',
    buttonBreed: ''
  }
}

componentDidMount(){
  console.log('bocho');
  console.log(this.props);
}

handleSubmit(e){
  e.preventDefault();
  console.log("searchForm's handleSubmit is running...");
  const {breed, color, gender, age, zipCode, distance } = this.state;
  this.props.dispatch(seekCat(breed, color, gender, age, zipCode, distance));
}

onChange(e){
  console.log("searchForm's onChange is running...");
  this.setState({
    [e.target.name] : e.target.value
  });
}

clearResults(){
  console.log('clearResults running...');
  this.props.dispatch(petsSearchReset());
}

viewSuggestion(){
  console.log('viewSuggestion running...');
  console.log(this.props);
  let breedPick;
  switch(this.props.homeMBTI) {
    case 'INFJ':
      breedPick = 'Russian Blue';
      break;
    case 'INTJ':
      breedPick = 'Norwegian Forest Cat';
      break;
    case 'ISTP':
      breedPick = 'Tiger';
      break;
    case 'ISTJ':
      breedPick = 'British Shorthair';
      break;
    case 'ISFP':
      breedPick = 'Ragdoll';
      break;
    case 'ISFJ':
      breedPick = 'Persian';
      break;
    case 'INFP':
      breedPick = 'Birman';
      break;
    case 'INTP':
      breedPick = 'Turkish Van';
      break;
    case 'ESTP':
      breedPick = 'Bengal';
      break;
    case 'ESFP':
      breedPick = 'Sphynx/Hairless';
      break;
    case 'ENFP':
      breedPick = 'Singapura';
      break;
    case 'ENTP':
      breedPick = 'Balinese';
      break;
    case 'ESTJ':
      breedPick = 'Maine Coon';
      break;
    case 'ESFJ':
      breedPick = 'Tonkinese';
      break;
    case 'ENFJ':
      breedPick = 'Devon Rex';
      break;
    case 'ENTJ':
      breedPick = 'Siamese';
      break;
    default: 
    breedPick = '';
  }
  console.log(breedPick);
  this.setState({
    breed : breedPick    
  });
 


}


render() {
  console.log(this.props);
  return (
      <Container>
      <div className='formArea'>
      <Row id='searchFormRow'>
      <Col sm='12' lg='12'>
      <Form className='searchForm' onSubmit={(e)=>this.handleSubmit(e)}>
        <h5 className='SDCH5'>SEEK DAT CAT</h5>
        <CatSuggestion visitButton={<Button id='seekButton'>SEEK!</Button>} onClick={()=>{this.viewSuggestion()}} mbti={this.props.homeMBTI} />
        <Row id='kittyBar'>
        <Col sm='12' lg='3'>
        <FormGroup id='breedSelect' className='form-group searchform-group bloco'>
          <Label className='catSearchLabel'for="breed">BREED</Label>
          <Input ref={this.inputOption} onChange={(e=>this.onChange(e))} type="select" name="breed" id="breed" value={this.state.breed}>

          <option value=''>ANY</option>
          <option value='Abyssinian'>Abysinnian</option>
          <option value='American Curl'>American Curl</option>
          <option value='American Shorthair'>American Shorthair</option>
          <option value='American Wirehair'>American Wirehair</option>
          <option value='Applehead Siamese'>Applehead Siamese</option>
          <option value='Balinese'>Balinese</option>
          <option value='Bengal'>Bengal</option>
          <option value='Birman'>Birman</option>
          <option value='Bobtail'>Bobtail</option>
          <option value='Bombay'>Bombay</option>
          <option value='British Shorthair'>British Shorthair</option>
          <option value='Burmese'>Burmese</option>
          <option value='Burmilla'>Burmilla</option>
          <option value='Calico'>Calico</option>
          <option value='Canadian Hairless'>Canadian Hairless</option>
          <option value='Chartreux'>Chartreux</option>
          <option value='Chausie'>Chausie</option>
          <option value='Chincilla'>Chincilla</option>
          <option value='Cornish Rex'>Cornish Rex</option>
          <option value='Cymric'>Cymric</option>
          <option value='Devon Rex'>Devon Rex</option>
          <option value='Dilute Calico'>Dilute Calico</option>
          <option value='Dilute Tortoiseshell'>Dilute Tortoiseshell</option>
          <option value='Domestic Long Hair'>Domestic Long Hair</option>
          <option value='Domestic Medium Hair'>Domestic Medium Hair</option>
          <option value='Domestic Short Hair'>Domestic Short Hair</option>
          <option value='Egyptian Mau'>Egyptian Mau</option>
          <option value='Exotic Shorthair'>Exotic Shorthair</option>
          <option value='Extra-Toes Cat'>Extra-Toes Cat</option>
          <option value='Havana'>Havana</option>
          <option value='Himalayan'>Himalayan</option>
          <option value='Japanese Bobtail'>Japanese Bobtail</option>
          <option value='Javanese'>Javanese</option>
          <option value='Korat'>Korat</option>
          <option value='LaPerm'>LaPerm</option>
          <option value='Maine Coon'>Maine Coon</option>
          <option value='Manx'>Manx</option>          
          <option value='Munchkin'>Munchkin</option>
          <option value='Nebelung'>Nebelung</option>
          <option value='Norwegian Forest Cat'>Norwegian Forest Cat</option>
          <option value='Ocicat'>Ocicat</option>
          <option value='Oriental Long Hair'>Oriental Long Hair</option>
          <option value='Oriental Short Hair'>Oriental Short Hair</option>
          <option value='Oriental Tabby'>Oriental Tabby</option>
          <option value='Persian'>Persian</option>
          <option value='Pixie-Bob'>Pixie-Bob</option>
          <option value='Ragamuffin'>Ragamuffin</option>
          <option value='Ragdoll'>Ragdoll</option>
          <option value='Russian Blue'>Russian Blue</option>
          <option value='Scottish Fold'>Scottish Fold</option>
          <option value='Selkirk Rex'>Selkirk Rex</option>
          <option value='Siamese'>Siamese</option>
          <option value='Serbian'>Serbian</option>
          <option value='Silver'>Silver</option>
          <option value='Singapura'>Singapura</option>
          <option value='Snowshoe'>Snowshoe</option>
          <option value='Somali'>Somali</option>
          <option value='Sphynx/Hairless'>Sphynx/Hairless</option>
          <option value='Tabby'>Tabby</option>
          <option value='Tiger'>Tiger</option>
          <option value='Tonkinese'>Tonkinese</option>
          <option value='Torbie'>Torbie</option>
          <option value='Tortoiseshell'>Tortoiseshell</option>
          <option value='Turkish Angora'>Turkish Angora</option>
          <option value='Turkish Van'>Turkish Van</option>
          <option value='Tuxedo'>Tuxedo</option>
          </Input>
        </FormGroup>
        </Col>

        
          <Col className='genderColumn' xs='12' sm='12' lg='3'>
        <FormGroup id='genderSelect' className='form-group bloco'>
          <Label className='catSearchLabel'for="gender">GENDER</Label>
          <Input onChange={(e=>this.onChange(e))} type="select" name="gender" id="gender">
            <option value=''>--ANY--</option>
            <option value='F'>F</option>
            <option value='M'>M</option>         
          </Input>
        </FormGroup>
          </Col>
          <Col className='ageColumn' xs='12' sm='12' lg='3'>
        <FormGroup id='ageColumn' className='form-group bloco'>
          <Label className='catSearchLabel'for="age">AGE</Label>
          <Input onChange={(e=>this.onChange(e))} type="select" name="age" id="age">
            <option value=''>--ANY--</option>
            <option value='Baby'>BABY</option>
            <option value='Young'>YOUNG</option>         
            <option value='Adult'>ADULT</option>         
            <option value='Senior'>SENIOR</option>         
          </Input>
        </FormGroup>
            </Col>
            <Col sm='12' lg='3'>
        <FormGroup id='zipCodeColumn' className='form-group bloco' >
          <Label id='zipCodeLabel' className='catSearchLabel'for="zipCode">ZIPCODE</Label>
          <Input className='catZipCodeSearch' required minLength='5' maxLength='5' onChange={(e=>this.onChange(e))} type="text" name="zipCode" id="zipCode" />
        </FormGroup>
            </Col>
          </Row>
        <section className='searchButtonGroup'>
        <Row>
        <Col lg='6'>
        <Button id='seekButton'>SEEK!</Button>
        </Col>
        <br/>
        </Row>
        </section>
      </Form>
      </Col>
      </Row>
      </div>
    </Container>
    );
  }
}

export default connect()(SearchForm);