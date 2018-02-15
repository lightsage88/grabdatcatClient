import React from 'react';
import {shallow, mount} from 'enzyme';

import {HomeGreet} from './homeGreet';

describe('<HomeGreet/>', ()=>{
	it('Renders without crashing', ()=>{
		mount(<HomeGreet/>);
	});

});