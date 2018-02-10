import React from 'react';
import {Button, Popover, PopoverHeader, PopoverBody} from 'reactstrap';
import {connect} from 'react-redux';

export class CatSuggestion extends React.Component {
	constructor(props){
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			popoverOpen : false,
			catBreed: ''
		};
	}


toggle() {
	this.setState({
		popoverOpen: !this.state.popoverOpen
	});
}

render(){
	console.log(this.props.personalityType);
	let personality = this.props.personalityType;
	if(personality === "N/A"){
		console.log('personalttype is not set');
		return(
			<div>
				<p>Edit your account and pick a personality type to see what cat breed would best suit you!</p>
			</div>
			);
	} else {

	console.log(this.props);
	return(
		<div>
			<Button id="Popover1" onClick={this.toggle}>
				Cat Suggestion
			</Button>
			<Popover placement='bottom' isOpen={this.state.popoverOpen}
			target='Popover1' toggle={this.toggle}>
			<PopoverHeader>Best Cat for your Personality Type</PopoverHeader>
          <PopoverBody>Hey there, we noticed your personality type is {this.props.personalityType}. According
          our super scientific calculations, you'd best pair with a --insert breed dynamically-- cat.} </PopoverBody>
        </Popover>
		</div>
		);
 }
}


}

const mapStateToProps = state => ({
	personalityType : state.app.user.mBTI
});

export default connect(mapStateToProps)(CatSuggestion);