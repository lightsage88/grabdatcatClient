import React from 'react';
import {shallow, mount} from 'enzyme';

import {UpdateForm} from './updateForm';

describe('<UpdateForm/>', ()=>{
	it('Renders without crashing', ()=>{
		mount(<UpdateForm/>);
	});

});