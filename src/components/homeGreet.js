import React from 'react';
import './app.css';
import './homeGreet.css';
export default function HomeGreet(props){

	return(
		<div>
		<h1 className='homeGreet'>Hello, {props.firstName}
					<p className='homeGreet'>If you set an MBTI type during registration, you can view our recommendation for your cat search below!</p>

		</h1>
		</div>
		);
}