// updateForm.js

import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {reduxForm} from 'redux-form';
import {updateUser} from '../actions/index.js';
import './updateForm.css';


class UpdateForm extends React.Component {
constructor(props){
	super(props);
	this.state = {
	modal: false,
	_id: this.props.props.accountData._id,
	firstName: this.props.props.accountData.firstName,
	lastName: this.props.props.accountData.lastName,
	emailAddress: this.props.props.accountData.emailAddress,
	phoneNumber: this.props.props.accountData.phoneNumber,
	mBTI: this.props.props.accountData.mBTI
  };
}

toggle(){
	this.setState({
		modal: !this.state.modal
	});
}

handleSubmit(e){
  e.preventDefault();
  let _id = this.state._id;
  let firstName = this.state.firstName;
  let lastName = this.state.lastName;
  let emailAddress = this.state.emailAddress;
  let phoneNumber = this.state.phoneNumber;
  let mBTI = this.state.mBTI;
  this.props.dispatch(updateUser(_id, firstName, lastName, emailAddress, phoneNumber, mBTI));
}

changeValue(e){
  let value = e.target.value;
	this.setState({
		[e.target.name]: value
	});
}


render() {
  if(this.state._id === undefined){
    window.location = '/account';
  }
let accountData = this.props.props.accountData;

return (
<div>
  <Form className='editAccountModalForm' onSubmit={(e)=>this.handleSubmit(e)}>
   <FormGroup id='editAccountLand'>
      <Label className='accountEditMBTILabel' for="mBTI">MYERS-BRIGGS PERSONALITY TYPE</Label>
      <Input type="select" onChange={(e)=>this.changeValue(e)} name="mBTI" id="mBTI" defaultValue={accountData.mBTI} placeholder={accountData.mBTI}>
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
    <Button className='editSubmit'>Submit</Button>
</Form>
</div>);
  }
}

export default reduxForm({form: 'registration'})(UpdateForm); 