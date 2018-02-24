import React from 'react';
import {shallow, mount} from 'enzyme';

import {Landing} from './landing';
import Image from './image';
describe('<Landing/>', ()=>{
	it('Renders without crashing', ()=>{
		shallow(<Landing/>);
	});

	// it.only('Renders without crashing', ()=>{
	// 	const wrapper = mount(<Landing/>);
	// 	console.log(wrapper.debug());
	// });

	it('renders the title', ()=>{
		const title = 'GRAB DAT CAT';
		const wrapper = shallow(<Landing title={title} />);
		expect(wrapper.contains(<h1 className='App-title'>{title}</h1>)).toEqual(true);
	});

	it('shows a picture of a cat', ()=>{
		const picture = '../staticAssets/blackCatAroundCorner.jpg';
		const wrapper = shallow(<Landing picture={picture}/>);
		expect(wrapper.contains(<Image className='notRegisteredPic' imageAddress={picture}/>));
	});
});