import React from 'react';
import {Button, Form, FormGroup, Label, Input, Container, Row, Col} from 'reactstrap';
import {reduxForm} from 'redux-form';
import {registerUser} from '../actions/index.js';
import './registration.css';
import './registrationForm.css';
import './app.css';
import {connect} from 'react-redux';

class RegistrationForm extends React.Component {
handleSubmit(event){
  event.preventDefault();
  const username = event.target.username.value;
  const password = event.target.password.value;
  const firstName = event.target.firstName.value;
  const lastName = event.target.lastName.value;
  const phoneNumber = event.target.phoneNumber.value;
  const emailAddress = event.target.emailAddress.value;
  const mBTI = event.target.mBTI.value;
  this.props.dispatch(registerUser(username, password, firstName, lastName, phoneNumber, emailAddress, mBTI));
}

render() {
  let validLogin = this.props.validLogin;
  if(validLogin===false){
    return(
       <div>
        <h1 className='badRegistration'>Ooooh, hooman, try a different username</h1>
        <Container>
        <Form onSubmit={(e)=>this.handleSubmit(e)}>
          <h4 className='registrationBanner'>REGISTRATION</h4>
          <br/>
          <Row>
            <Col lg='4' md='6'>
            <FormGroup>
              <Label htmlFor='firstName' >FIRST NAME</Label>
              <input className='form-control' type='text' name='firstName' id='firstName' required/>
            </FormGroup>
          </Col>
          <Col lg='4' md='6'>
            <FormGroup>
              <Label htmlFor="lastName">LAST NAME</Label>
              <input className='form-control' required type='text' name='lastName' id='lastName'/>
            </FormGroup>
          </Col>
          <Col lg='4' md='6'>
            <FormGroup>
              <Label htmlFor="phoneNumber">PH #</Label>
              <input required className='form-control' type='text' name='phoneNumber' id='phoneNumber'/>
            </FormGroup>
          </Col>
        </Row>
        <Row id='bottomRow'>
          <Col lg='4' md='6'>
            <FormGroup id='emailAddress'>
              <Label htmlFor="emailAddress">E-MAIL</Label>
              <input className='form-control' type='email' name='emailAddress' id='emailAddress' placeholder='cat@gato.meow'/>
            </FormGroup>
          </Col>
          <Col lg='4' md='6'>
            <FormGroup id='username'>
              <Label htmlFor="username">USERNAME</Label>
              <input className='form-control' type='text' name='username' id='username' required/>
            </FormGroup>
          </Col>
          <Col lg='4'>
            <FormGroup id='password'>
              <Label htmlFor='passwordFirst'>PASSWORD</Label>
              <input className='form-control' type='password' required name='password' id='password' minLength='10'/> 
            </FormGroup>
          </Col>
        </Row>     
        <FormGroup id='mBTI'>
          <Row>
            <Col lg='8'>
              <Label className='mBTILabel' for="mBTI">MYERS-BRIGGS PERSONALITY TYPE</Label>
              <p className='dontKnow'><a href='https://www.16personalities.com/free-personality-test'>Don't know?</a></p>
            </Col>
            <Col lg='4'>
              <Input className='mBTIInput' type="select" name="mBTI" id="mBTI">
                <option value='N/A'>N/A</option>
                <option value="ISFJ">ISFJ</option>
                <option value="INFJ">INFJ</option>
                <option value="INTJ">INTJ</option>
                <option value="ISTP">ISTP</option>
                <option value="ISFP">ISFP</option>
                <option value="INFP">INFP</option>
                <option value="INTP">INTP</option>
                <option value="ESTP">ESTP</option>
                <option value="ESFP">ESFP</option>
                <option value="ENFP">ENFP</option>
                <option value="ENTP">ENTP</option>
                <option value="ESTJ">ESTJ</option>
                <option value="ESFJ">ESFJ</option>
                <option value="ENFJ">ENFJ</option>
                <option value="ENTJ">ENTJ</option>
              </Input>
            </Col>
          </Row>
        </FormGroup>
      <Button className='submitButton' color='info'>SUBMIT</Button>
    </Form>
  </Container>
</div>
);
}
  return (
    <div>
      <Container>
        <Form onSubmit={(e)=>this.handleSubmit(e)}>
          <h4 className='registrationBanner'>REGISTRATION</h4>
          <br/>
          <Row>
            <Col lg='4' md='6'>
              <FormGroup>
                <Label id='firstNameLabel' htmlFor='firstName' >FIRST NAME</Label>
                <input className='form-control' type='text' name='firstName' id='firstName' required/>
              </FormGroup>
            </Col>
            <Col lg='4' md='6'>
              <FormGroup>
                <Label id='lastNameLabel' htmlFor="lastName">LAST NAME</Label>
                <input className='form-control' required type='text' name='lastName' id='lastName'/>
              </FormGroup>
            </Col>
            <Col lg='4' md='6'>
              <FormGroup>
                <Label id='phoneNumberLabel' htmlFor="phoneNumber">PH #</Label>
                <input required className='form-control' type='text' name='phoneNumber' id='phoneNumber'/>
              </FormGroup>
            </Col>
          </Row>
          <section className='desktopEscapeClause'>
          <Row id='bottomRow'>
            <Col lg='4' md='6'>
            <FormGroup id='emailAddress'>
              <Label id='emailAddressLabel' htmlFor="emailAddress">E-MAIL</Label>
              <input className='form-control' type='email' name='emailAddress' id='emailAddress' placeholder='cat@gato.meow'/>
            </FormGroup>
            </Col>
            <Col lg='4' md='6'>
              <FormGroup id='username'>
                <Label htmlFor="username">USERNAME</Label>
                <input className='form-control' type='text' name='username' id='username' required/>
              </FormGroup>
            </Col>
            <Col lg='4' md='6'>
              <FormGroup id='password'>
                <Label htmlFor='passwordFirst'>PASSWORD</Label>
                <input className='form-control' type='password' required name='password' id='password' minLength='10'/> 
              </FormGroup>
            </Col>
          </Row>     
        </section>
          <FormGroup id='mBTI'>
            <Row>
              <Col lg='8'>
               <Label className='mBTILabel' for="mBTI">MYERS-BRIGGS PERSONALITY TYPE</Label>
               <p className='dontKnow'><a href='https://www.16personalities.com/free-personality-test'>Don't know?</a></p>
              </Col>
              <Col lg='4'>
                <Input className='mBTIInput' type="select" name="mBTI" id="mBTI">
                  <option value='N/A'>N/A</option>
                  <option value="ISFJ">ISFJ</option>
                  <option value="INFJ">INFJ</option>
                  <option value="INTJ">INTJ</option>
                  <option value="ISTP">ISTP</option>
                  <option value="ISFP">ISFP</option>
                  <option value="INFP">INFP</option>
                  <option value="INTP">INTP</option>
                  <option value="ESTP">ESTP</option>
                  <option value="ESFP">ESFP</option>
                  <option value="ENFP">ENFP</option>
                  <option value="ENTP">ENTP</option>
                  <option value="ESTJ">ESTJ</option>
                  <option value="ESFJ">ESFJ</option>
                  <option value="ENFJ">ENFJ</option>
                  <option value="ENTJ">ENTJ</option>
                </Input>
              </Col>
            </Row>
          </FormGroup>
      <Button className='submitButton' color='info'>SUBMIT</Button>
    </Form>
    </Container>
  </div>
  );
  }
}

const mapStateToProps = state => ({
  validLogin: state.app.user.validLogin
});

RegistrationForm = connect(mapStateToProps)(RegistrationForm);

export default reduxForm({form: 'registration'})(RegistrationForm); 