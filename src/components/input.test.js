import React from 'react';
import {shallow, mount} from 'enzyme';

import Input from './image';

describe('<Input/>', ()=>{
	it('Renders without crashing', ()=>{
		shallow(<Input/>);
	});

});