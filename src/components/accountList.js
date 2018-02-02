import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom';
import {ListGroup, ListGroupItem, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from 'reactstrap';
import felixPic from '../staticAssets/felixImposter.jpg';
import neemoPic from '../staticAssets/tuxedo cat.jpg';
import pepperPic from '../staticAssets/pepperImposter.jpg';
import HumanData from './humanData'; 
export default class AccountList extends React.Component {
//I don't know how to get the fucking picture to work, but I'm going to
//come back for it later...


					// <ListGroupItem><strong>First Name: </strong><span>Adrian</span></ListGroupItem>
					// <ListGroupItem><strong>Last Name: </strong><span>Rosales</span></ListGroupItem>
					// <ListGroupItem><strong>First Name: </strong><span>Adrian</span></ListGroupItem>
					// <ListGroupItem><strong>First Name: </strong><span>Adrian</span></ListGroupItem>
					// <ListGroupItem><strong>First Name: </strong><span>Adrian</span></ListGroupItem>



// render() {
// console.log("List running...");
// console.log(this.this.props.accountData);
// let accountData = this.this.props.accountData;
// const listItems = accountData.map((item, index) => 
// <li key={index}><ListGroupItem key={index}>{item}</ListGroupItem></li>);
// 		return (
			
// 				<ListGroup>
// 					{listItems}
// 				</ListGroup>
// 				);

// 			}
render(){
console.log('List function going...');
console.log(this.props);
console.log(this.props.accountData);
return(
	<div>
		<section className='aboutYou'>
			<h3>About You</h3>
				<HumanData accountData={this.props}/>
			<a href='/'>edit account info</a>
		</section>
		<br/>

		<section className='aboutCats'>
			<h3>Cats in Kennel</h3>
			<Card>
				<Link to='/pedestal/:catName'><CardImg className='catImage' top width='100%' src={felixPic} alt="Felix" /></Link>
				<CardBody>
					<CardTitle>{this.props.accountData.catKennel[0].catName}|{this.props.accountData.catKennel[0].catGender}|{this.props.accountData.catKennel[0].catAge}|{this.props.accountData.catKennel[0].catColor}</CardTitle>
				</CardBody>
				<Button className='removeCat' type='button'>Remove Cat</Button>
			</Card>
			<Card>
				<Link to='/pedestal/:catName'><CardImg className='catImage' top width='100%' src={neemoPic} alt="Pepper" /></Link>
				<CardBody>
					<CardTitle>{this.props.accountData.catKennel[1].catName}|{this.props.accountData.catKennel[1].catGender}|{this.props.accountData.catKennel[1].catAge}|{this.props.accountData.catKennel[1].catColor}</CardTitle>
				</CardBody>
				<Button className='removeCat' type='button'>Remove Cat</Button>
			</Card><Card>
				<Link to='/pedestal/:catName'><CardImg className='catImage' top width='100%' src={pepperPic} alt="Pepper" /></Link>
				<CardBody>
					<CardTitle>{this.props.accountData.catKennel[2].catName}|{this.props.accountData.catKennel[2].catGender}|{this.props.accountData.catKennel[2].catAge}|{this.props.accountData.catKennel[2].catColor}</CardTitle>
				</CardBody>
				<Button className='removeCat' type='button'>Remove Cat</Button>
			</Card>
		</section>
	</div>
	
	);
}
}