import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
// import Image from './image';
import {Link} from 'react-router-dom';

export default class RegistrationForm extends React.Component {
  render() {
    return (
      <Form>
        <h5>REGISTRATION</h5>
        <h4>Enter info below, hooman</h4>
        <FormGroup>
          <Label for="firstName">FIRST NAME</Label>
          <Input type="text" name="firstName" id="firstName"/>
        </FormGroup>

        <FormGroup>
          <Label for="lastName">LAST NAME</Label>
          <Input type="text" name="lastName" id="lastName"/>
        </FormGroup>

        <FormGroup>
          <Label for="phoneNumber">PH #</Label>
          <Input type="text" name="phoneNumber" id="phoneNumber"/>
        </FormGroup>

        <FormGroup>
          <Label for="emailAddress">E-MAIL</Label>
            <Input type="email" name="emailAddress" id="emailAddress"/>
        </FormGroup>
        <FormGroup>
          <Label for="userName">USERNAME</Label>
          <Input type="text" name="userName" id="userName"/>
        </FormGroup>
        <FormGroup>
          <Label for='passwordFirst'>PASSWORD</Label>
          <Input type='password' name='passwordFirst' id='passwordFirst'/>
        </FormGroup>
        <FormGroup>
          <Label for='passwordSecond'>&iquest;OTRA VEZ?</Label>
          <Input type='password' name='passwordSecond' id='passwordSecond'/>
        </FormGroup>
        <FormGroup>
          <Label for="mBTI">MYERS-BRIGGS PERSONALITY TYPE</Label>
          <Input type="select" name="mBTI" id="mBTI">
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
        <Link to='/home'><Button type='submit' color='info'>SUBMIT</Button></Link>
      </Form>
    );
  }
}