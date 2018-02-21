import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './account.css';
import {ListGroupItem} from 'reactstrap';

  export default function HumanData(props) {
  	console.log(props);
  		return(
  		<div>
			<ListGroupItem className='humanDataItem'><strong>First Name: </strong><span>{props.accountData.firstName}</span></ListGroupItem>
			<ListGroupItem className='humanDataItem'><strong>Last Name: </strong><span>{props.accountData.lastName}</span></ListGroupItem>
			<ListGroupItem className='humanDataItem'><strong>Email: </strong><span>{props.accountData.emailAddress}</span></ListGroupItem>
			<ListGroupItem className='humanDataItem'><strong>PH #: </strong><span>{props.accountData.phoneNumber}</span></ListGroupItem>
			<ListGroupItem className='humanDataItem'><strong>MBTI: </strong><span>{props.accountData.mBTI}</span></ListGroupItem>
		</div>
		);
  	}