import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

export default function Image(props){
//I don't know how to get the fucking picture to work, but I'm going to
//come back for it later...
return (
	<img src={props.imageAddress} alt={props.imageAddress}/>
	);

}