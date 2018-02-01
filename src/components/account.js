import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import RegistrationForm from './registrationForm';
import NavBar from './navBar';
import List from './list';
import userPic from '../staticAssets/AdrianEdmundoRosales.jpg';
import Image from './image';
import './account.css';
//need Image
//need to have accountDetails
//need to have catKennelDetails

export default function Account(props) {
	return(
		<div>
	<NavBar />
	<h1>Account</h1>
	<Image className='profilePic' imageAddress={userPic}/>
		<a href='/'>UPLOAD/CHANGE PICTURE</a>
	<h3>About You</h3>
	<List/>
		</div>
		);
}