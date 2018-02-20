import React from 'react';
import {shallow, mount} from 'enzyme';
import {persistData} from '../actions';
import HumanData from './humanData';

describe('<HumanData/>', ()=>{
	it('Renders without crashing', ()=>{
		const wrapper = shallow(
			<HumanData accountData={
				{firstName: 'Bill',
				lastName: 'Clinton',
				emailAddress: 'ovalorifice@gmail.com',
				phoneNumber : '555-555-5555',
				mBTI : 'ENFJ'
			}}/>
			);
		const instance = wrapper.instance();
	
	});

});