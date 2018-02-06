import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form} from 'reactstrap';
import HumanData from './humanData'; 
import RegistrationForm from './registrationForm';
import UpdateForm from './updateForm';
export default class AccountList extends React.Component {
constructor(props){
	super(props);
	this.state = {
		modal: false
	};
	this.toggle = this.toggle.bind(this);
}

toggle(){
	this.setState({
		modal: !this.state.modal
	});
}

test(e){
	console.log('test running');
	console.log(e);
}





render(){
//hopefully you can style the BUTTON in the style of a link a tag thing
return(
	<div>
		<section className='aboutYou'>

			<h3>About You</h3>
			<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
         	<span>Here is where you're going to set up a form which will interact with an action to be defined that will allow
         	you to change the user's info</span>
         		<UpdateForm props={this.props} />
          </ModalBody>
                 
        </Modal>

				<HumanData accountData={this.props.accountData}/>
			<Button onClick={this.toggle}>edit account info</Button>

		</section>
	</div>
	
	);
}
}
	
