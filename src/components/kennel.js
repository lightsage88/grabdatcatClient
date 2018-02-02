import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import NavBar from './navBar';
import HomeGreet from './homeGreet';
import SearchForm from './searchForm';
import kennelBackgroundPic from '../staticAssets/markerCats.jpg';
import './kennel.css';
export default function Kennel(props) {
	console.log('function Kennel working...');
	console.log(props);
	return(
		<div>
			<NavBar />
			<h1>CAT KENNEL</h1>
			<main className='content'>
			</main>

		</div>
		);
}