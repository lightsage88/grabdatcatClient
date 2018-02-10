import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import {Button, Card, Jumbotron, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import {Link, Redirect} from 'react-router-dom';
import NavBar from './navBar';
import {connect} from 'react-redux';
import {roundUpCats} from '../actions/index';

import './kennel.css';
//have a componentDidMount


export class Kennel extends React.Component {
componentDidMount() {
	let mLabId = localStorage.getItem('_id');
	this.props.dispatch(roundUpCats(mLabId));
}

removeCat(e, number){
	console.log('removeCat running..');
	console.log(e);
	console.log(e.target.value);
	console.log(number);
	


}

render(){
let catsInState = this.props.cats;
console.log(catsInState);
if(!localStorage.token){
return(
  <Redirect to="/"/>
  );
}

if(catsInState.length >= 1){
	console.log('ooh boy, here come dem kittehs');
	const kennelCats = catsInState.map((cat, index) => 
	<div key={index}>
		<Card>
			<CardBody>
				<CardTitle>{cat.name} / {cat. breed} / {cat.sex} / {cat.age} </CardTitle>
				<CardImg className='catImage' width='auto' height='auto' src={cat.media} alt="Image Unavailable" />
	   				<CardText>{cat.description}</CardText>	
 					<span>Contact Phone:<strong>{cat.contactPhone}</strong></span>
 					<br/>
 					<span>Contact Email:<strong>{cat.contactEmail}</strong></span>
	   		</CardBody>
	   			<Button onClick={()=>this.removeCat(cat.id)}className='removeCat' type='button'>Remove Cat</Button>
		</Card>
	</div>
		);
	return (
		<div>
			<NavBar />
			<h1>CAT KENNEL</h1>
			<main className='content'>
				{kennelCats}
			</main>
		</div>

		);
}
if(catsInState.length === 0){
	console.log('catsInState is empty');
	return(
		<div>
		<NavBar />
		<h1>CAT KENNEL</h1>
			<Jumbotron>
				<h1 className='display-3'>Oh Dear,<br/>No Kittehs In Here!</h1>
				<p className='lead'>Oooh Hooman, you must go to 'HOME' and search for kittehs, hooman...</p>
			</Jumbotron>
		</div>
		);
}


		
	}
}

const mapStateToProps = state => ({
 cats: state.app.user.cats
});

export default connect(mapStateToProps)(Kennel);








// <Card>
// 					<Link to='/pedestal/:catName'><CardImg className='catImage' top width='100%' src={felixPic} alt="Felix" /></Link>
// 					<CardBody>
// 						<CardTitle>{accountData.catKennel[0].catName}|{accountData.catKennel[0].catGender}|{accountData.catKennel[0].catAge}|{accountData.catKennel[0].catColor}</CardTitle>
// 						<CardText>{accountData.catKennel[0].catStory}</CardText>	
// 						<span>Contact Phone:<strong>{accountData.catKennel[0].contactPhone}</strong></span>
// 						<br/>
// 						<span>Contact Email:<strong>{accountData.catKennel[0].contactEmail}</strong></span>

// 					</CardBody>
// 					<Button className='removeCat' type='button'>Remove Cat</Button>
// 				</Card>
// 				<Card>
// 					<Link to='/pedestal/:catName'><CardImg className='catImage' top width='100%' src={neemoPic} alt="Pepper" /></Link>
// 					<CardBody>
// 						<CardTitle>{accountData.catKennel[1].catName}|{accountData.catKennel[1].catGender}|{accountData.catKennel[1].catAge}|{accountData.catKennel[1].catColor}</CardTitle>
// 						<CardText>{accountData.catKennel[1].catStory}</CardText>
// 						<span>Contact Phone:<strong>{accountData.catKennel[1].contactPhone}</strong></span>
// 							<br/>
// 						<span>Contact Email:<strong>{accountData.catKennel[1].contactEmail}</strong></span>
// 					</CardBody>
// 					<Button className='removeCat' type='button'>Remove Cat</Button>
// 				</Card><Card>
// 					<Link to='/pedestal/:catName'><CardImg className='catImage' top width='100%' src={pepperPic} alt="Pepper" /></Link>
// 					<CardBody>
// 						<CardTitle>{accountData.catKennel[2].catName}|{accountData.catKennel[2].catGender}|{accountData.catKennel[2].catAge}|{accountData.catKennel[2].catColor}</CardTitle>
// 						<CardText>{accountData.catKennel[2].catStory}</CardText>
// 						<span>Contact Phone:<strong>{accountData.catKennel[2].contactPhone}</strong></span>
// 						<br/>
// 						<span>Contact Email:<strong>{accountData.catKennel[2].contactEmail}</strong></span>
		
// 					</CardBody>
// 					<Button className='removeCat' type='button'>Remove Cat</Button>
// 				</Card>