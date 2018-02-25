import React from 'react';
import {shallow, mount} from 'enzyme';

import {SearchForm} from './searchForm';

describe('<SearchForm/>', ()=>{
	it('Renders without crashing', ()=>{
		shallow(<SearchForm/>);
	});
});