import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import {Button, Card, Jumbotron, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import {Link, Redirect} from 'react-router-dom';
import NavBar from './navBar';
import {connect} from 'react-redux';
import {roundUpCats, deleteCat, loginUserSuccess, persistData} from '../actions/index';

import './kennel.css';
//have a componentDidMount


export class Kennel extends React.Component {
componentDidMount() {
	console.log('kennel componentWillMount going...');
    const mLabId = localStorage.getItem('_id');
    this.props.dispatch(persistData(mLabId));
  
this.props.dispatch(roundUpCats(mLabId));
}


// componentDidMount(){
	// 	console.log('theShitCircus');
	// 	const authToken = localStorage.getItem('token');
	// 	// const userData = localStorage.getItem('userData');
	// 	const firstName = localStorage.getItem('firstName');
	// 	const lastName = localStorage.getItem('lastName');
	// 	const phoneNumber = localStorage.getItem('phoneNumber');
	// 	const emailAddress = localStorage.getItem('emailAddress');
	// 	const mBTI = localStorage.getItem('mBTI');
	// 	const cats = localStorage.getItem('cats');
	// 	const _id = localStorage.getItem('_id');
	// 	console.log(firstName);
	// 	this.props.dispatch(loginUserSuccess(authToken, firstName, lastName, phoneNumber, emailAddress, mBTI, cats, _id));
	// }


removeCat(number){
	let mLabId = localStorage.getItem('_id');
	let catId = number;
	console.log('removeCat running..');
	this.props.dispatch(deleteCat(mLabId, catId));
	window.location = '/kennel';
	


}

render(){
	console.log(this.props);
	console.log(this.state);
const catsInState = this.props.cats;
console.log(catsInState);
if(!localStorage.token){
return(
  <Redirect to="/"/>
  );
}

if((catsInState === undefined) || (catsInState.length===0)){
	console.log('catsInState is empty');
	return(
		<div>
		<NavBar />
		<h1 className='catKennelBanner'>CAT KENNEL</h1>
			<Jumbotron>
				<h1 className='display-3'>Oh Dear,<br/>No Kittehs In Here!</h1>
				<p className='lead'>Oooh Hooman, you must go to 'HOME' and search for kittehs, hooman...</p>
			</Jumbotron>
		</div>
		);
} else if(catsInState.length >= 1) {
	console.log('ooh boy, here come dem kittehs');
	const kennelCats = catsInState.map((cat, index) => 
	<div key={index}>
		<Card>
			<CardBody>
				<CardTitle className='catName'>{cat.name}</CardTitle> 
								<CardImg className='catImage' width='auto' height='auto' src={cat.media} alt="Image Unavailable" />

				<CardTitle className='catDetails'>BREED: {cat. breed}<br/>SEX: {cat.sex}<br/>AGE: {cat.age}<br/>PH#: {cat.contactPhone}<br/>EMAIL: {cat.contactEmail}</CardTitle>
				
	   				<CardText>{cat.description}</CardText>	
 				
	   		</CardBody>
	   			<Button onClick={()=>this.removeCat(cat.id)}className='removeCat' type='button'>Remove Cat</Button>
		</Card>
	</div>
		);
	return (
		<div>
			<NavBar />
			<h1 className='catKennelBanner'>CAT KENNEL</h1>
			<main className='content'>
				{kennelCats}
			</main>
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