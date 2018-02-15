import React from 'react';
import {shallow, mount} from 'enzyme';

import {Kennel} from './kennel';

describe('<Kennel/>', ()=>{
	it('Renders without crashing', ()=>{
		mount(<Kennel/>);
	});

});