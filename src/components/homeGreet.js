import React from 'react';
import './app.css';
import './homeGreet.css';
export default function HomeGreet(props){

	return(
		<h1 className='homeGreet'>Hello, {props.firstName}</h1>
		);
}