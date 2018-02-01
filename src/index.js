import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../components/app';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css'

const DATA = [
	{
		profilePic: img.jpg,
		firstName: "Adrian",
		lastName: "Rosales",
		email: "lightsage88@zbeke.com",
		phoneNumber: "(503)-444-4444",
		mBTI: "INTP",
		catKennel: [
				{
					catPic: meow.jpg,
					catName: "Felix"
					catBreed: 'Domestic Shorthair'
					catGender: "M",
					catAge: "Senior",
					catColor: "Black",
					contactEmail: 'popo@popo.com',
					contactPhone: '(555)-555-5555',
					catStory: "Old King Bo is a merry old soul and he likes to eat curds and whey"
				},
				{
					catPic: mewling.jpg,
					catName:"Neemo",
					catBreed: 'Tuxedo'
					catGender: "M",
					catAge: "Adult",
					catColor: "Black/White",
					contactEmail: 'popo@popo.com',
					contactPhone: '(555)-555-5555',
					catStory: "Neemo is a sweet cat, but he is also very skittish and cautious towards strangers. He likes to have ample places to hide and lots of food to eat. Definitely a good cat for a homebody who doesn't have loud parties or entertains much."
				},
				{
					catPic: pepper.jpg,
					catName:"Pepper",
					catBreed: 'Domestic Shorthair'
					catGender: "F",
					catAge: "Senior",
					catColor: "Calico",
					contactEmail: 'popo@popo.com',
					contactPhone: '(555)-555-5555',
					catStory: "Miss Peppy is a pilot, nurse, mind-reader, and a ping pong champion."
				}
			]
	}
];


ReactDOM.render(<App data={DATA}/>, document.getElementById('root'));
registerServiceWorker();
