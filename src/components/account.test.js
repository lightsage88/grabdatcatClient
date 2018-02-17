import React from 'react';
import {shallow, mount} from 'enzyme';

import {Account} from './account';

describe('<Account/>', ()=>{
	it('Renders without crashing', ()=>{
		const dispatch = jest.fn();
		const wrapper = shallow(<Account accountData={{firstName: 'Bill',
				lastName: 'Clinton',
				emailAddress: 'ovalorifice@gmail.com',
				phoneNumber : '555-555-5555',
				mBTI : 'ENFJ'
			}} dispatch={dispatch} />);
		const instance = wrapper.instance();
	});

});