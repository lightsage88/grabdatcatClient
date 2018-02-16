import React from 'react';
import {shallow, mount} from 'enzyme';

import {SearchResults} from './searchResults';

describe('<SearchResults/>', ()=>{
	it('Renders without crashing', ()=>{
		mount(<SearchResults/>);
	});

});