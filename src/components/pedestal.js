import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

export default function Pedestal(props) {
	return(
		<form>
			<input type='text' placeholder='USERNAME'/>
			<input type='text' placeholder='PASSWORD'/>
			<br/>
			<Link to='/home'><Button>LOGIN</Button></Link>
			<Link to='/registration'><Button>REGISTER</Button></Link>
		</form>
		);
}