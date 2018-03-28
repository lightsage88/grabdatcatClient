import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './account.css';
import {ListGroupItem} from 'reactstrap';

  export default function HumanData(props) {
  	console.log(props);
  		return(
  		<div>
			<ListGroupItem className='humanDataItem'><strong>MBTI: </strong><span>{props.accountData.mBTI}</span></ListGroupItem>
		</div>
		);
  	}