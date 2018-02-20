import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
export default function Image(props){

return (
	<img className={props.className} src={props.imageAddress} alt={props.imageAddress}/>
	);

}