import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom';
import {ListGroup, ListGroupItem, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from 'reactstrap';

  export default function HumanData(props) {
  	console.log(props);
  		return(
  			<div>

			<ListGroupItem><strong>First Name: </strong><span>{props.accountData.accountData.firstName}</span></ListGroupItem>
			<ListGroupItem><strong>Last Name: </strong><span>{props.accountData.accountData.lastName}</span></ListGroupItem>
			<ListGroupItem><strong>Email: </strong><span>{props.accountData.accountData.email}</span></ListGroupItem>
			<ListGroupItem><strong>PH #: </strong><span>{props.accountData.accountData.phoneNumber}</span></ListGroupItem>
			<ListGroupItem><strong>MBTI: </strong><span>{props.accountData.accountData.mBTI}</span></ListGroupItem>
			</div>
			);

			}