import React from 'react';
import {shallow, mount} from 'enzyme';

import {Home} from './home';

describe('<Home/>', ()=>{
	it('Renders without crashing', ()=>{
		mount(<Home/>);
	});

});