import React from 'react';
import {shallow, mount} from 'enzyme';
import {persistData} from '../actions';
import {Home} from './home';

describe('<Home/>', ()=>{

	it('Renders without crashing', ()=>{
		const dispatch = jest.fn();
		const mLabId = '1234';
		const wrapper = mount(<Home dispatch={dispatch} persistData={persistData}/>);
		const instance = wrapper.instance();
		// console.log(dispatch);
		// console.log(persistData);
		// instance();
		// instance.persistData(mLabId);
		// expect(dispatch).toHaveBeenCalledWith(persistData(mLabId));
		expect(dispatch).toBeCalled();
	});

});