import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './loginForm.css'
import {Button} from 'reactstrap';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import store from '../store';
import {loginUser, protectedEndPointTesting, logOutUser} from '../actions/index.js';
import {ClipLoader} from 'react-spinners';

export class LoginForm extends React.Component {
	constructor(props){
		super(props);
		this.state={
			loading: false
		}
	}

	


	handleSubmit(event){
		event.preventDefault();
		if(!localStorage.token){
			this.setState({
				loading:true
			});
		}
		const username = event.target.username.value;
		const password = event.target.password.value;
		this.props.dispatch(loginUser(username, password));
		setTimeout(()=>{
			if(!this.props.validLogin){
			this.setState({
				loading:false
			});
		}

		},1000);
		
		
	}

	handleLogout(event){
		console.log('handleLogout running');
		localStorage.clear();
		this.props.dispatch(logOutUser());
		window.location.reload();

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
		<ClipLoader className='ClipLoader' color={'red'}  loading={this.state.loading}/>
		</div>
	</Router>
		);
	}
}

const mapStateToProps = state => ({
  validLogin: state.app.user.validLogin
});

export default connect(mapStateToProps)(LoginForm);
