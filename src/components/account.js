import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import {connect} from 'react-redux';
import NavBar from './navBar';
import AccountList from './accountList';
import userPic from '../staticAssets/AdrianEdmundoRosales.jpg';
import Image from './image';
import './account.css';
// import DATA from '../../index';
// require('../../index.js');
const accountData = 

{
	
		profilePic: '',
		firstName: "Adrian",
		lastName: "Rosales",
		email: "lightsage88@zbeke.com",
		phoneNumber: "(503)-444-4444",
		mBTI: "INTP",
		catKennel: [
				{
					catPic: 'https://imgur.com/makqOuE',
					catName: "Felix",
					catBreed: 'Domestic Shorthair',
					catGender: "M",
					catAge: "Senior",
					catColor: "Black",
					contactEmail: 'popo@popo.com',
					contactPhone: '(555)-555-5555',
					catStory: "Old King Bo is a merry old soul and he likes to eat curds and whey"
				},
				{
					catPic: 'https://imgur.com/vQqvqSX',
					catName:"Neemo",
					catBreed: 'Tuxedo',
					catGender: "M",
					catAge: "Adult",
					catColor: "Black/White",
					contactEmail: 'popo@popo.com',
					contactPhone: '(555)-555-5555',
					catStory: "Neemo is a sweet cat, but he is also very skittish and cautious towards strangers. He likes to have ample places to hide and lots of food to eat. Definitely a good cat for a homebody who doesn't have loud parties or entertains much."
				},
				{
					catPic: 'https://imgur.com/B5EmwD6',
					catName:"Pepper",
					catBreed: 'Domestic Shorthair',
					catGender: "F",
					catAge: "Senior",
					catColor: "Calico",
					contactEmail: 'popo@popo.com',
					contactPhone: '(555)-555-5555',
					catStory: "Miss Peppy is a pilot, nurse, mind-reader, and a ping pong champion."
				}
			]
};
//need Image
//need to have accountDetails
//need to have catKennelDetails

export class Account extends React.Component {


	render(){
		
	


	return(

		<div>
	<NavBar />
	<h1>Account</h1>
	<Image className='profilePic' imageAddress={userPic}/>
		<a href='/'>UPLOAD/CHANGE PICTURE</a>
	<AccountList accountData={this.props.accountData}/>
		</div>
		);
	}
}


const mapStateToProps = state => ({
  accountData : {
  				firstName : state.user.firstName,
				  lastName : state.user.lastName,
				  emailAddress: state.user.emailAddress,
				  phoneNumber : state.user.phoneNumber,
				  mBTI : state.user.mBTI
  			}
});


export default connect(mapStateToProps)(Account);