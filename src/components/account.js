import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import {connect} from 'react-redux';
import NavBar from './navBar';
import {Redirect} from 'react-router-dom';
import AccountList from './accountList';
import './account.css';


export class Account extends React.Component {


	render(){
		if(localStorage.token){
      console.log('yippie');
    } else {
      return(
      <Redirect to="/"/>
      );
    }
	return(

		<div>
	<NavBar />
	<h1>Account</h1>
	<AccountList accountData={this.props.accountData}/>

		</div>
		);
	}
}


const mapStateToProps = state => ({
  accountData : {
  				_id: state.app.user._id,
  				username : state.app.user.username,
  				firstName : state.app.user.firstName,
				  lastName : state.app.user.lastName,
				  emailAddress: state.app.user.emailAddress,
				  phoneNumber : state.app.user.phoneNumber,
				  mBTI : state.app.user.mBTI
  			}
});


export default connect(mapStateToProps)(Account);