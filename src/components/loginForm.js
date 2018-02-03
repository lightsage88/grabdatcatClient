import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser, loginUserSuccess, protectedEndPointTesting} from '../actions/index.js';


export class LoginForm extends React.Component {

	componentDidMount(){
		console.log('theShitCircus');
		const authToken = localStorage.getItem('token');
		console.log(authToken);
		this.props.dispatch(loginUserSuccess(authToken));

	}

	handleSubmit(event){
		event.preventDefault();
		const username = event.target.username.value;
		const password = event.target.password.value;
		this.props.dispatch(loginUser(username, password));
	}

	handleLogout(event){
		console.log('handleLogout running');
		localStorage.removeItem('token');
		//need to reload the page with react-router-dom Redirect?
	}
	handleTPE(event){
		console.log('you a real crip');
				this.props.dispatch(protectedEndPointTesting());
	}

	render(){
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