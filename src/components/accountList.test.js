import React from 'react';
import {shallow, mount} from 'enzyme';

import {AccountList} from './accountList';

describe('<AccountList/>', ()=>{
	it('Renders without crashing', ()=>{
		shallow(<AccountList/>);
	});

});