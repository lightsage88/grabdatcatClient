import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Button, Card, Jumbotron, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import {BrowserRouter as Router, Redirect} from 'react-router-dom';
import NavBar from './navBar';
import {connect} from 'react-redux';
import {roundUpCats, deleteCat, persistData} from '../actions/index';

import './kennel.css';


export class Kennel extends React.Component {
constructor(props){
	super(props);
	this.state = {
		loading:true
	}
}

componentWillMount(){
	let number = (Math.random()*3500);
	setInterval(()=>{
		this.setState({
			loading: false
		})
	}, number);
}

componentDidMount() {
	console.log('kennel componentDidMount going...');
    const mLabId = localStorage.getItem('_id');
    this.props.dispatch(persistData(mLabId));
	this.props.dispatch(roundUpCats(mLabId));
}



removeCat(number){
	let mLabId = localStorage.getItem('_id');
	let catId = number;
	console.log('removeCat running..');
	this.props.dispatch(deleteCat(mLabId, catId));
}

render(){

const catsInState = this.props.cats;
if(!localStorage.token){
return(
<Router>
  <Redirect to="/"/>
 </Router>
  );
}

if(!catsInState>0){
	return(
		<Jumbotron>
			<h1 className='display-3'>Wait, Hooman<br/>We be rounding up them kittehs</h1>
			<div className='loader'></div>
			<p className='lead'>Oooh Hooman, patience is a virtue, hooman...</p>
		</Jumbotron>
	);
}

if((catsInState === undefined) || (catsInState.length===0)){
	return(
		<div className='kenScreen'>
		<NavBar />
		<h1 className='catKennelBanner'>CAT KENNEL</h1>
			<Jumbotron>
				<h1 className='display-3'>Oh Dear,<br/>No Kittehs In Here!</h1>
				<p className='lead'>Oooh Hooman, you must go to 'HOME' and search for kittehs, hooman...</p>
			</Jumbotron>
		</div>
		);
} else if(catsInState.length >= 1) {
	const kennelCats = catsInState.map((cat, index) => 
	<div key={index}>
		<Card>
			<CardBody>
				<CardTitle className='catName'>{cat.name}</CardTitle> 
					<CardImg className='catImage' width='auto' height='auto' src={cat.media} alt="Image Unavailable" />
				<CardTitle className='catDetails'>BREED: {cat.breed}<br/>SEX: {cat.sex}<br/>AGE: {cat.age}<br/>PH#: {cat.contactPhone}<br/>EMAIL: {cat.contactEmail}</CardTitle>
	   				<CardText>{cat.description}</CardText>	
	   		</CardBody>
	   			<Button onClick={()=>this.removeCat(cat.id)}className='removeCat' type='button'>Remove Cat</Button>
		</Card>
	</div>
);
		return (
			<div className='kenScreen'>
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








