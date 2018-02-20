import React from 'react';
import {shallow, mount} from 'enzyme';
import {persistData, roundUpCats, deleteCat} from '../actions';
import {Kennel} from './kennel';

describe('<Kennel/>', ()=>{
	it('Renders without crashing', ()=>{
		const dispatch = jest.fn();
		const mLabId = '1234';
		const catId = 'abcd';
		const wrapper = shallow(<Kennel dispatch={dispatch} persistData={persistData} />);
		const instance = wrapper.instance();
		expect(dispatch).toHaveBeenCalled;
		
	});

});