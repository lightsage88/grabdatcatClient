import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './loginForm.css'
import {Button} from 'reactstrap';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import store from '../store';
import {loginUser, protectedEndPointTesting, logOutUser} from '../actions/index.js';


export class LoginForm extends React.Component {


	



	handleSubmit(event){
		event.preventDefault();
		const username = event.target.username.value;
		const password = event.target.password.value;
		this.props.dispatch(loginUser(username, password));
		// if(localStorage.token){
		// 	window.location ='/home'
		// } else {
		// 	window.location ='/';
		// }
		

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
		console.log(store);
		console.log(this.props);
		
		

	return(
	<Router>
		<div className='loginForm'>
		<form className='loginForm' onSubmit={(e)=> this.handleSubmit(e)}>
			<input id='username' required type='text' name='username' placeholder='USERNAME'/>
			<br/>
			<input id='password' required minLength='10' type='password' name='password' placeholder='PASSWORD'/>
			<br/>
			<Button className='loginFormButtons'>LOGIN</Button>
			<Link to='/registration'><Button onClick={()=>window.location.reload()}className='loginFormButtons'>REGISTER</Button></Link>
		</form>
		</div>
	</Router>
		);
	}
}

const mapStateToProps = state => ({
  validLogin: state.app.user.validLogin
});

export default connect(mapStateToProps)(LoginForm);
//will <Link> cause a problem??