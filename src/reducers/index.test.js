import rootReducer from './index';
import user from './user';
import pets from './pets';
import {updateReduxState, 
		foundADuplicate,
		addCat,
		petsSearchSuccess,
		petsSearchReset,
		registerUserSuccess,
		loginUserSuccess,
		updateUserSuccess,
		logOutUser,
		deleteUserSuccess
	 	} from '../actions';

describe('user', ()=>{

const dummyState = {
	data: {},
	token: '',
	firstName: '',
	lastName: '',
	emailAddress: '',
	phoneNumber: '',
	mBTI : '',
	cats: [],
	_id: ''
};

	it('should set the initial state when nothing is passed in', ()=>{
		const state = user(undefined, {type: '__UKNOWN'});
		expect(state).toEqual({
			
		});
	});

	it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = user(currentState, {type: '__UNKNOWN'});
        expect(state).toEqual(currentState);
    });

    // describe('updateReduxState', ()=>{
    // 	it('should return a state with only unique cats', ()=> {
    // 		// let state;
    // 		let currentState = {
    // 			cats: [{id:2}]
    // 			};
    // 		let reduxCats = [{id:2}];
    // 		const state = user(currentState, updateReduxState(3));
    // 		expect(state).toEqual( {
    // 			cats: [{id:2},{id:3}]
    // 		});
    // 	});
    // });

    describe('foundADuplicate', ()=>{
    	it('should return a state where activeButton is true', ()=>{
    		let currentState = {
    			activeButton: false
    		};
    		const state = user(currentState, {type: 'FOUND_A_DUPLICATE'});
    		expect(state).toEqual({
    			activeButton: true
    		});	
    	});
    });

    describe('addCat', ()=>{
    	it('should return a state with one more cat than it had before', ()=>{
    		let currentState = {
    			cats: []
    		};
    		let cat2={meow: 'meow'};
    		const state = user(currentState, addCat(cat2));
    		expect(state).toEqual({
    			cats: [cat2]
    		});
    	});
    });
    describe('petsSearchSuccess', ()=>{
    	it('should return the same state', ()=>{
    		let currentState = {};
    		const state = user(currentState, petsSearchSuccess());
    		expect(state).toEqual(currentState);
    	});
    });
    describe('petsSearchReset', ()=>{
    	it('should return the same state', ()=>{
    		let currentState = {};
    		const state = user(currentState, petsSearchSuccess());
    		expect(state).toEqual(currentState);
    	});
    });

    describe('registerUserSuccess', ()=>{
    	it('should return an empty state',()=>{
    		let currentState = {id: '1234'};
    		const state = user(currentState, registerUserSuccess());
    		expect(state).toEqual({});
    	});
    });

    describe('loginUserSuccess', ()=>{
    	it('should fill up the state with tons of user data', ()=>{
    		let currentState = {};
    		let token = '1234';
    		let firstName = 'Adrian';
    		let lastName = 'Rosales';
    		let emailAddress = 'ad@col.com';
    		let phoneNumber = '444-444-4444';
    		let mBTI = 'INTP';
    		let cats = [];
    		let _id = '5678';
    		const state = user(currentState, loginUserSuccess(token, firstName, lastName, emailAddress, phoneNumber, mBTI, cats, _id ));
    		expect(state).toEqual({
    			token,
    			firstName, 
    			lastName,
    			phoneNumber,
    			emailAddress,
    			mBTI,
    			cats,
    			_id
    		});
    	});
    });

    describe('updateUserSuccess', ()=>{
    	it('should change the current userdata in the state', ()=>{
    		let currentState = {
    			token: '1234',
    			firstName: 'Adrian',
    			lastName: 'Rosales',
    			emailAddress: 'a@co.com',
    			phoneNumber: '444-444-4444',
    			mBTI: 'INTP',
    			cats: [],
    			_id: '5678'
    		};
    		let token='5678';
    		let firstName='Rick';
    		let lastName = 'James';
    		let emailAddress = 'sponge@crip.com';
    		let phoneNumber = '555-555-5555';
    		let mBTI = 'ENFJ';
    		let cats = [1];
    		let _id = '1234';
    		const state = user(currentState, updateUserSuccess(firstName, lastName, emailAddress, phoneNumber, mBTI));
    		expect(state).toEqual({
    			token:'1234',
    			firstName,
    			lastName,
    			emailAddress,
    			phoneNumber,
    			mBTI,
    			cats: [],
    			_id: '5678'
    		});
    	});
    });

    describe('logOutUser', ()=>{
    	it('should return an empty state', ()=>{
    		let currentState = {
    			token: '1234',
    			firstName: 'Adrian',
    			lastName: 'Rosales',
    			emailAddress: 'a@co.com',
    			phoneNumber: '444-444-4444',
    			mBTI: 'INTP',
    			cats: [],
    			_id: '5678'
    		};
    		const state = user(currentState, logOutUser());
    		expect(state).toEqual({});
    	});
    });

    describe('deleteUserSuccess', ()=>{
    	it('should return an empty state', ()=>{
    		let currentState = {
    			token: '1234',
    			firstName: 'Adrian',
    			lastName: 'Rosales',
    			emailAddress: 'a@co.com',
    			phoneNumber: '444-444-4444',
    			mBTI: 'INTP',
    			cats: [],
    			_id: '5678'
    		};
    		const state = user(currentState, deleteUserSuccess());
    		expect(state).toEqual({});
    	});
    });
});