import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {connect} from 'react-redux';
import NavBar from './navBar';
import {Redirect} from 'react-router-dom';
import AccountList from './accountList';
import {persistData} from '../actions/index';
import './account.css';


export class Account extends React.Component {
componentWillMount() {
	console.log('kennel componentWillMount going...');
    const mLabId = localStorage.getItem('_id');
    this.props.dispatch(persistData(mLabId));
  
}


render(){
	console.log(this.props);
	console.log(this.store);
	if(localStorage.token){
	    console.log('yippie');
    } else {
      return(
      <Redirect to="/"/>
      );
    }
	return(

	<div className='accountArea'>
		<NavBar />
		<h1 className='accountBanner'>Account
			<h3 className='aboutYou'>About You</h3>
		</h1>
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