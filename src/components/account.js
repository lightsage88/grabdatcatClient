import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import RegistrationForm from './registrationForm';
import NavBar from './navBar';
import AccountList from './accountList';
import userPic from '../staticAssets/AdrianEdmundoRosales.jpg';
import Image from './image';
import './account.css';
// import DATA from '../../index';
// require('../../index.js');

//need Image
//need to have accountDetails
//need to have catKennelDetails

export default class Account extends React.Component {
	render(){
	console.log('Account function going...');
	console.log(this.props.data);
	return(

		<div>
	<NavBar />
	<h1>Account</h1>
	<Image className='profilePic' imageAddress={userPic}/>
		<a href='/'>UPLOAD/CHANGE PICTURE</a>
	<AccountList accountData={this.props}/>
		</div>
		);
}
}