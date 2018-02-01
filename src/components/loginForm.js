import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import {Button} from 'reactstrap';

export default function LoginForm(props) {
	return(
		<form>
			<input type='text' value='USERNAME' placeholder='USERNAME'/>
			<input type='text' value="PASSWORD" placeholder='PASSWORD'/>
			<Button>LOGIN</Button>
			<Button>REGISTER</Button>
		</form>
		);
}