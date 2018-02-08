import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import {Button, Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import {Redirect} from 'react-router-dom';
import NavBar from './navBar';
import {connect} from 'react-redux';


import './kennel.css';



export class Kennel extends React.Component {

removeCat(e, number){
	console.log('removeCat running..');
	console.log(number);
	


}

		render(){
			if(localStorage.token){
	      console.log('yippie');
	    } else {
	      return(
	      <Redirect to="/"/>
	      );
	    }
	   console.log(this.props.cats)
	   	const kennelCats = this.props.cats.map((cat, index)=>
	   			<Card key={index}>
	   				<CardBody>
	   					<CardTitle>{cat.name} / {cat.breed} / {cat.sex} / {cat.age} *</CardTitle>
	   					<CardImg className='catImage' width='auto' height='auto' src={cat.media.photo[3].$t} alt="Image Unavailable" />
	   					<CardText>{cat.description}</CardText>	
 						<span>Contact Phone:<strong>{cat.contactPhone}</strong></span>
 						<br/>
 						<span>Contact Email:<strong>{cat.contactEmail}</strong></span>
	   				</CardBody>
	   				<Button onClick={()=>this.removeCat(cat.id)}className='removeCat' type='button'>Remove Cat</Button>
	   			</Card>
	   	)

		return(
			<div>
				<NavBar />
				<h1>CAT KENNEL</h1>
				<main className='content'>
					{kennelCats}
				</main>

			</div>
			);
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