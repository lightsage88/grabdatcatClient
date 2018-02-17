import React from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {reduxForm} from 'redux-form';
import {registerUser} from '../actions/index.js';
import './registration.css';
import './app.css';


class RegistrationForm extends React.Component {
  onSubmit(values){
    console.log('onSubmit firing');
    console.log(values);
  }


  handleSubmit(event){
    event.preventDefault();
    console.log('crip life');
    const username = event.target.username.value;
    const password = event.target.password.value;
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const phoneNumber = event.target.phoneNumber.value;
    const emailAddress = event.target.emailAddress.value;
    const mBTI = event.target.mBTI.value;
    console.log(username);
    console.log(password);
    console.log(phoneNumber);
    console.log(emailAddress);
    console.log(mBTI);

    this.props.dispatch(registerUser(username, password, firstName, lastName, phoneNumber, emailAddress, mBTI));

  }


  render() {
    return (
      <div>
      <Form onSubmit={(e)=>this.handleSubmit(e)}>
        <h4 className='registrationBanner'>REGISTRATION</h4>
        <h5>Enter info below, hooman</h5>
        <FormGroup>
          <Label htmlFor='firstName' >FIRST NAME</Label>
          <input class='form-control' type='text' name='firstName' id='firstName' required/>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="lastName">LAST NAME</Label>
          <input class='form-control' required type='text' name='lastName' id='lastName'/>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="phoneNumber">PH #</Label>
          <input required class='form-control' type='text' name='phoneNumber' id='phoneNumber'/>
          
        </FormGroup>
        <section className='desktopEscapeClause'>
        <FormGroup id='emailAddress'>
          <Label htmlFor="emailAddress">E-MAIL</Label>
          <input class='form-control' type='email' name='emailAddress' id='emailAddress' placeholder='cat@gato.meow'/>
            
        </FormGroup>
        <FormGroup id='username'>
          <Label htmlFor="username">USERNAME</Label>
          <input class='form-control' type='text' name='username' id='username' required/>
         
        </FormGroup>
        <FormGroup id='password'>
          <Label htmlFor='passwordFirst'>PASSWORD<br/>atleast 10 chars!</Label>
          <input class='form-control' type='password' required name='password' id='password' minLength='10'/> 
        </FormGroup>
                </section>

        <FormGroup id='mBTI'>
          <Label className='mBTILabel' for="mBTI">MYERS-BRIGGS PERSONALITY TYPE</Label>
          <p className='dontKnow'><a href='https://www.16personalities.com/free-personality-test'>Don't know?</a></p>
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
        </FormGroup>
        <Button color='info' disabled={
          this.props.pristine || this.props.submitting
        }>SUBMIT</Button>
      </Form>
      </div>
    );
  }
}

export default reduxForm({form: 'registration'})(RegistrationForm); 