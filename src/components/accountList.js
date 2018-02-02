import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import HumanData from './humanData'; 
export default function AccountList(props) {
//I don't know how to get the fucking picture to work, but I'm going to
//come back for it later...


					// <ListGroupItem><strong>First Name: </strong><span>Adrian</span></ListGroupItem>
					// <ListGroupItem><strong>Last Name: </strong><span>Rosales</span></ListGroupItem>
					// <ListGroupItem><strong>First Name: </strong><span>Adrian</span></ListGroupItem>
					// <ListGroupItem><strong>First Name: </strong><span>Adrian</span></ListGroupItem>
					// <ListGroupItem><strong>First Name: </strong><span>Adrian</span></ListGroupItem>



// render() {
// console.log("List running...");
// console.log(this.props.accountData);
// let accountData = this.props.accountData;
// const listItems = accountData.map((item, index) => 
// <li key={index}><ListGroupItem key={index}>{item}</ListGroupItem></li>);
// 		return (
			
// 				<ListGroup>
// 					{listItems}
// 				</ListGroup>
// 				);

// 			}
console.log('List function going...');
console.log(props);
console.log(props.accountData);
return(
	<div>
		<section className='aboutYou'>
			<h3>About You</h3>
				<HumanData accountData={props}/>
			<a href='/'>edit account info</a>
		</section>
	</div>
	
	);
}