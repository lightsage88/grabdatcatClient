import React from 'react';
import {shallow, mount} from 'enzyme';

import {CatSuggestion} from './catSuggestion';

describe('<CatSuggestion/>', ()=>{
	it('Renders without crashing', ()=>{
		shallow(<CatSuggestion/>);
	});

});