import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import {Button, Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import {Link} from 'react-router-dom';
import NavBar from './navBar';

import felixPic from '../staticAssets/felixImposter.jpg';
import neemoPic from '../staticAssets/tuxedo cat.jpg';
import pepperPic from '../staticAssets/pepperImposter.jpg';
import './kennel.css';

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

export default function Kennel(props) {
	console.log('function Kennel working...');
	console.log(props);
	console.log(accountData);
	return(
		<div>
			<NavBar />
			<h1>CAT KENNEL</h1>
			<main className='content'>
					<Card>
				<Link to='/pedestal/:catName'><CardImg className='catImage' top width='100%' src={felixPic} alt="Felix" /></Link>
				<CardBody>
					<CardTitle>{accountData.catKennel[0].catName}|{accountData.catKennel[0].catGender}|{accountData.catKennel[0].catAge}|{accountData.catKennel[0].catColor}</CardTitle>
					<CardText>{accountData.catKennel[0].catStory}</CardText>	
					<span>Contact Phone:<strong>{accountData.catKennel[0].contactPhone}</strong></span>
					<br/>
					<span>Contact Email:<strong>{accountData.catKennel[0].contactEmail}</strong></span>

				</CardBody>
				<Button className='removeCat' type='button'>Remove Cat</Button>
			</Card>
			<Card>
				<Link to='/pedestal/:catName'><CardImg className='catImage' top width='100%' src={neemoPic} alt="Pepper" /></Link>
				<CardBody>
					<CardTitle>{accountData.catKennel[1].catName}|{accountData.catKennel[1].catGender}|{accountData.catKennel[1].catAge}|{accountData.catKennel[1].catColor}</CardTitle>
					<CardText>{accountData.catKennel[1].catStory}</CardText>
					<span>Contact Phone:<strong>{accountData.catKennel[1].contactPhone}</strong></span>
						<br/>
					<span>Contact Email:<strong>{accountData.catKennel[1].contactEmail}</strong></span>
				</CardBody>
				<Button className='removeCat' type='button'>Remove Cat</Button>
			</Card><Card>
				<Link to='/pedestal/:catName'><CardImg className='catImage' top width='100%' src={pepperPic} alt="Pepper" /></Link>
				<CardBody>
					<CardTitle>{accountData.catKennel[2].catName}|{accountData.catKennel[2].catGender}|{accountData.catKennel[2].catAge}|{accountData.catKennel[2].catColor}</CardTitle>
					<CardText>{accountData.catKennel[2].catStory}</CardText>
					<span>Contact Phone:<strong>{accountData.catKennel[2].contactPhone}</strong></span>
					<br/>
					<span>Contact Email:<strong>{accountData.catKennel[2].contactEmail}</strong></span>
	
				</CardBody>
				<Button className='removeCat' type='button'>Remove Cat</Button>
			</Card>
			</main>

		</div>
		);
}