import React from 'react';
import {shallow, mount} from 'enzyme';

import Registration from './registration';

describe('<Registration/>', ()=>{
	it('Renders without crashing', ()=>{
		const wrapper = shallow(<Registration/>);
		const instance = wrapper.instance;
	});

});