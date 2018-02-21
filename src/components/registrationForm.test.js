import React from 'react';
import {shallow, mount} from 'enzyme';

import RegistrationForm from './registrationForm';

describe('<RegistrationForm/>', ()=>{
	it('Renders without crashing', ()=>{
		const dispatch = jest.fn();
		const wrapper = shallow(<RegistrationForm dispatch={dispatch}/>);
		const instance = wrapper.instance();
	});
});