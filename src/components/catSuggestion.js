import React from 'react';
import {Button, Popover, PopoverHeader, PopoverBody} from 'reactstrap';
import {connect} from 'react-redux';
import './catSuggestion.css';

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
	console.log(personality);
	if(personality === "N/A" || ""){
		console.log('personalttype is not set');
		return(
			<div className='catSuggestion'>
				<p className='catSuggestionP'>Edit your account and pick a personality type to see what cat breed would best suit you!</p>
			</div>
			);
	} else {
	let suggestion;
	switch(this.props.personalityType) {
		case 'INFJ':
			suggestion = 'Russian Blue';
			break;
		case 'INTJ':
			suggestion = 'Norwegian Forest Cat';
			break;
		case 'ISTP':
			suggestion = 'Tiger';
			break;
		case 'ISTJ':
			suggestion = 'British Shorthair';
			break;
		case 'ISFP':
			suggestion = 'Ragdoll';
			break;
		case 'ISFJ':
			suggestion = 'Persian';
			break;
		case 'INFP':
			suggestion = 'Birman';
			break;
		case 'INTP':
			suggestion = 'Turkish Van';
			break;
		case 'ESTP':
			suggestion = 'Bengal';
			break;
		case 'ESFP':
			suggestion = 'Sphynx/Hairless';
			break;
		case 'ENFP':
			suggestion = 'Singapura';
			break;
		case 'ENTP':
			suggestion = 'Balinese';
			break;
		case 'ESTJ':
			suggestion = 'Maine Coon';
			break;
		case 'ESFJ':
			suggestion = 'Tonkinese';
			break;
		case 'ENFJ':
			suggestion = 'Devon Rex';
			break;
		case 'ENTJ':
			suggestion = 'Siamese';
			break;
		default: 
		suggestion = '';
			

	}
        
return(
		<div className='catSuggestion'>
            <div id='timeTraveler'>{this.props.visitButton}</div>
			<Button id="Popover1" onClick={this.toggle}>
				Cat Suggestion
			</Button>
			<Popover placement='bottom' isOpen={this.state.popoverOpen}
			target='Popover1' toggle={this.toggle}>
				<PopoverHeader>Best Cat for your Personality Type</PopoverHeader>
	      		<PopoverBody>Hey there, we noticed your personality type is {this.props.personalityType}. According
	      		our super scientific calculations, you'd pair well with a {suggestion} cat. </PopoverBody>
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