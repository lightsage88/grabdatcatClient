import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty, email} from '../validators';
import {registerUser} from '../actions/index.js';
import InputX from './input';

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
      <Form onSubmit={(e)=>this.handleSubmit(e)}>
        <h5>REGISTRATION</h5>
        <h4>Enter info below, hooman</h4>
        <FormGroup>
          <Label htmlFor='firstName' >FIRST NAME</Label>
          <Field class='form-control' name='firstName' 
          id='firstName' type="text" component={InputX}
          validate={[required, nonEmpty]}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="lastName">LAST NAME</Label>
          <Field class='form-control' type="text" name="lastName" id="lastName" 
          component={InputX}
          validate={[required, nonEmpty]}/>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="phoneNumber">PH #</Label>
          <Field class='form-control' type="text" name="phoneNumber" id="phoneNumber" 
          component={InputX}/>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="emailAddress">E-MAIL</Label>
            <Field class='form-control' type="email" name="emailAddress" id="emailAddress" 
            component={InputX}
            validate={[required, nonEmpty, email]}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="username">USERNAME</Label>
          <Field class='form-control' type="text" name="username" id="username" 
          component={InputX}
          validate={[required, nonEmpty]}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor='passwordFirst'>PASSWORD<br/>atleast 10 chars!</Label>
          <Field class='form-control' placeholder='at least 10 characters!' type='password' name='password' id='passwordFirst' 
          component={InputX}
          validate={[required, nonEmpty]}/>
        </FormGroup>
        <FormGroup>
          <Label className='mBTILabel' for="mBTI">MYERS-BRIGGS PERSONALITY TYPE</Label>
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
    );
  }
}

export default reduxForm({form: 'registration'})(RegistrationForm); 