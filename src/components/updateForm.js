// updateForm.js

import React from 'react';
import { Button, Form, FormGroup, Label, Input, ModalFooter} from 'reactstrap';
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty, email} from '../validators';
import {registerUser} from '../actions/index.js';
import {connect} from 'react-redux';
import InputX from './input';
import store from '../store';

class UpdateForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		modal: false,
		firstName: this.props.props.accountData.firstName,
		lastName: this.props.props.accountData.lastName,
		emailAddress: this.props.props.accountData.emailAddress,
		phoneNumber: this.props.props.accountData.phoneNumber,
		mBTI: this.props.props.accountData.mBTI
	};
	this.toggle = this.toggle.bind(this);
	console.log(this.state);
	console.log(this.props);
	console.log(this.props.props.accountData);
}

toggle(){
	this.setState({
		modal: !this.state.modal
	});
}

test(e){
	console.log('test running...');
	console.log(e);
	console.log(this.refs.firstNameInput);
	console.log(e.target.value);
}

changeValue(e){
	//set up a switch so that it sees what the name is and then allows the state to be changed
	//according to that...on SUBMIT, then we can use dispatch to send an action that will interact with the backend we set up
	
	console.log('changeValue running...');
	console.log(e.target.name);
	console.log(e.target.value);
	let name = e.target.name.value;
	let value = e.target.value;
	this.setState({
		name: value

	});
	console.log(this.state);
}


  render() {
  	console.log('updateForm class running...');
  	console.log(this.props);
  	console.log(this.props.props.accountData);
  	let accountData = this.props.props.accountData;
  	console.log(accountData);
  	
    return (
    <div>
      <Form onSubmit={(e)=>this.handleSubmit(e)}>
        <h5>UPDATE</h5>
        <FormGroup>
          <Label htmlFor='firstName' >FIRST NAME</Label>
          <Input className='form-control' name='firstName' 
          id='firstName' type="text"
          defaultValue={accountData.firstName} placeholder={accountData.firstName}
          onChange={(e)=>this.changeValue(e)}
          ref='firstNameInput' />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="lastName">LAST NAME</Label>
          <Input className='form-control' type="text" name="lastName" id="lastName" 
          onChange={(e)=>this.changeValue(e)}
          defaultValue={accountData.lastName} placeholder={accountData.lastName}/>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="phoneNumber">PH #</Label>
          <Input className='form-control' type="text" name="phoneNumber" id="phoneNumber" 
          onChange={(e)=>this.changeValue(e)}
          defaultValue={accountData.phoneNumber} placeholder={accountData.phoneNumber}/>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="emailAddress">E-MAIL</Label>
            <Input className='form-control' type="email" name="emailAddress" id="emailAddress" 
            
            onChange={(e)=>this.changeValue(e)}
            defaultValue={accountData.emailAddress} placeholder={accountData.emailAddress}/>
        </FormGroup>
        
        <FormGroup>
          <Label for="mBTI">MYERS-BRIGGS PERSONALITY TYPE</Label>
          <Input type="select" name="mBTI" id="mBTI" defaultValue={accountData.mBTI} placeholder={accountData.mBTI}>
            <option value=''>N/A</option>
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
    </Form>
    <ModalFooter>
            <Button color="primary" onClick={(e)=>this.test(e)}>Do Something</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
 </div>
    );
  }
}


export default reduxForm({form: 'registration'})(UpdateForm); 