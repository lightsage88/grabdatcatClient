import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import {Button} from 'reactstrap';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser, loginUserSuccess, protectedEndPointTesting, logOutUser} from '../actions/index.js';


export class LoginForm extends React.Component {


	componentDidMount(){
		console.log('theShitCircus');
		const authToken = localStorage.getItem('token');
		// const userData = localStorage.getItem('userData');
		const firstName = localStorage.getItem('firstName');
		const lastName = localStorage.getItem('lastName');
		const phoneNumber = localStorage.getItem('phoneNumber');
		const emailAddress = localStorage.getItem('emailAddress');
		const mBTI = localStorage.getItem('mBTI');
		const cats = localStorage.getItem('cats');
		const _id = localStorage.getItem('_id');
		console.log(firstName);
		this.props.dispatch(loginUserSuccess(authToken, firstName, lastName, phoneNumber, emailAddress, mBTI, cats, _id));
	}



	handleSubmit(event){
		event.preventDefault();
		const username = event.target.username.value;
		const password = event.target.password.value;
		this.props.dispatch(loginUser(username, password));
		window.location ='/home';

	}

	handleLogout(event){
		console.log('handleLogout running');
		localStorage.clear();
		this.props.dispatch(logOutUser());
		window.location.reload();

		//need to reload the page with react-router-dom Redirect?
	}
	handleTPE(event){
		console.log('you a real crip');
				this.props.dispatch(protectedEndPointTesting());
	}

	render(){
		console.log(this.props);
		if(localStorage.token){
			console.log('hamboneX');
			return(
				<Redirect to='/home'/>
				);
		} else {
			console.log('you do not know de whey');
		}

	return(
		<div>
		<form onSubmit={(e)=> this.handleSubmit(e)}>
			<input type='text' name='username' placeholder='USERNAME'/>
			<input type='password' name='password' placeholder='PASSWORD'/>
			<br/>
			<Button>LOGIN</Button>
			<Link to='/registration'><Button>REGISTER</Button></Link>
		</form>
		<Button onClick={(e)=>this.handleLogout(e)}>Logout Test</Button>
		<Button onClick={()=>this.handleTPE()}>Test pro EP</Button>
		</div>
		);
	}
}

export default connect()(LoginForm);
//will <Link> cause a problem??