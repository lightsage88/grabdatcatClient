import React from 'react';
import './app.css';

export default function HomeGreet(props){

	return(
		<h1>Hello, {props.firstName}</h1>
		);
}