import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './account.css';
import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import HumanData from './humanData'; 
import UpdateForm from './updateForm';
import {deleteUser} from '../actions/index.js';
import {connect} from 'react-redux';
export class AccountList extends React.Component {
constructor(props){
	super(props);
	this.state = {
		modal: false,
		modal2: false
	};
	this.toggle = this.toggle.bind(this);
	this.toggle2=this.toggle2.bind(this);
}

toggle(){
	this.setState({
		modal: !this.state.modal
	});

}

toggle2(){
	this.setState({
		modal2: !this.state.modal2
	});
}



deleteAccount(e){
	
	let id = this.props.accountData._id;
	localStorage.clear();
	this.props.dispatch(deleteUser(id));

}





render(){
return(
		<div>
			<section className='aboutYou'>
			<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
	          <ModalHeader toggle={this.toggle}>EDIT ACCOUNT</ModalHeader>
	          	<ModalBody>
	         	  <UpdateForm props={this.props} />
		        </ModalBody>
		                 
		    </Modal>

		    <Modal isOpen={this.state.modal2} toggle={this.toggle2} className={this.props.className}>
		        <ModalHeader toggle={this.toggle2}>Are you sure?</ModalHeader>
					<Button onClick={(e)=>this.deleteAccount(e)}>JA</Button>
					<Button onClick={this.toggle2}>NEIN</Button>        		
		    	<ModalBody>
		    	</ModalBody>
		    </Modal>

			<HumanData accountData={this.props.accountData}/>
			<Button className='editAccountButton' onClick={this.toggle}>edit account info</Button>
			<Button className='deleteAccountButton' onClick={this.toggle2}>delete account</Button>
			</section>
		</div>
		);
	}
}
	
export default connect()(AccountList);