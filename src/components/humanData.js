import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {ListGroupItem} from 'reactstrap';

  export default function HumanData(props) {
  		return(
  			<div>

			<ListGroupItem><strong>First Name: </strong><span>{props.accountData.firstName}</span></ListGroupItem>
			<ListGroupItem><strong>Last Name: </strong><span>{props.accountData.lastName}</span></ListGroupItem>
			<ListGroupItem><strong>Email: </strong><span>{props.accountData.emailAddress}</span></ListGroupItem>
			<ListGroupItem><strong>PH #: </strong><span>{props.accountData.phoneNumber}</span></ListGroupItem>
			<ListGroupItem><strong>MBTI: </strong><span>{props.accountData.mBTI}</span></ListGroupItem>
			</div>
			);

			}