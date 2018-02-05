import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import HumanData from './humanData'; 
export default function AccountList(props) {

return(
	<div>
		<section className='aboutYou'>
			<h3>About You</h3>
				<HumanData accountData={props.accountData}/>
			<a href='/'>edit account info</a>
		</section>
	</div>
	
	);
}