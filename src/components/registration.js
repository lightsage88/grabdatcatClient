import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import RegistrationForm from './registrationForm';

export default function Registration(props) {
	return(
		<div>
	<h1>GRAB DAT CAT</h1>
	<RegistrationForm />
		</div>
		);
}