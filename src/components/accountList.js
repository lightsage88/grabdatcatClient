import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom';
import {ListGroup, ListGroupItem, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from 'reactstrap';
import felixPic from '../staticAssets/felixImposter.jpg';
import neemoPic from '../staticAssets/tuxedo cat.jpg';
import pepperPic from '../staticAssets/pepperImposter.jpg';
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
return(
	<div>
		<section className='aboutYou'>
			<h3>About You</h3>
			<ListGroupItem><strong>First Name: </strong><span>{props.accountData.firstName}</span></ListGroupItem>
			<ListGroupItem><strong>Last Name: </strong><span>{props.accountData.lastName}</span></ListGroupItem>
			<ListGroupItem><strong>Email: </strong><span>{props.accountData.email}</span></ListGroupItem>
			<ListGroupItem><strong>PH #: </strong><span>{props.accountData.phoneNumber}</span></ListGroupItem>
			<ListGroupItem><strong>MBTI: </strong><span>{props.accountData.mBTI}</span></ListGroupItem>
			<a href='/'>edit account info</a>
		</section>
		<section className='aboutCats'>
						<br/>

			<h3>Cats in Kennel</h3>
			<Card>
				<Link to='/card'><CardImg className='catImage' top width='100%' src={felixPic} alt="Felix" /></Link>
				<CardBody>
					<CardTitle>{props.accountData.catKennel[0].catName}|{props.accountData.catKennel[0].catGender}|{props.accountData.catKennel[0].catAge}|{props.accountData.catKennel[0].catColor}</CardTitle>
				</CardBody>
			</Card>
			<Card>
				<Link to='/card'><CardImg className='catImage' top width='100%' src={neemoPic} alt="Pepper" /></Link>
				<CardBody>
					<CardTitle>{props.accountData.catKennel[1].catName}|{props.accountData.catKennel[1].catGender}|{props.accountData.catKennel[1].catAge}|{props.accountData.catKennel[1].catColor}</CardTitle>
				</CardBody>
			</Card><Card>
				<Link to='/card'><CardImg className='catImage' top width='100%' src={pepperPic} alt="Pepper" /></Link>
				<CardBody>
					<CardTitle>{props.accountData.catKennel[2].catName}|{props.accountData.catKennel[2].catGender}|{props.accountData.catKennel[2].catAge}|{props.accountData.catKennel[2].catColor}</CardTitle>
				</CardBody>
			</Card>
		</section>
	</div>
	
	);
}