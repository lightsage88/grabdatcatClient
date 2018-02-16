import {
	REGISTER_USER_SUCCESS, 
	petsSearchSuccess,
	PETS_SEARCH_SUCCESS,
	petsSearchReset,
	PETS_SEARCH_RESET,
	logOutUser,
	LOG_OUT_USER,
	loginUserSuccess,
	LOGIN_USER_SUCCESS,
	updateUserSuccess,
	UPDATE_USER_SUCCESS,
	deleteUserSuccess,
	DELETE_USER_SUCCESS,
	registerUser,
	loginUser,
	persistData,
	protectedEndPointTesting,
	updateUser,
	deleteUser,
	seekCat,
	selectCat,
	foundADuplicate,
	FOUND_A_DUPLICATE,
	addCat,
	ADD_CAT,
	roundUpCats,
	deleteCat,
	updateReduxState,
	UPDATE_REDUX_STATE

} from './index';

import {registerUserSuccess} from './index';

describe('registerUserSuccess', () => {
	it('Should return the action', () => {
	const user = {id: "5a8545a19a3cd30014158c1c", username: "pigman", firstName: "Pigman", lastName: "pigman", cats: Array(0)}
	const action = registerUserSuccess(user);		
	expect(action.type).toEqual('REGISTER_USER_SUCCESS');
	expect(action.user).toEqual(user);
	});
});

describe('petsSearchSuccess', () => {
	it('Should return the action', () => {
	const pets = [{age: "Adult",
breed: "American Shorthair",
contactEmail: "dawnvargas05@yahoo.com",
contactPhone: "213-840-0153",
description: "If you are interested in meeting any one of our cat's or kittens please call: DAWN (213) 840-0153 OR feel free to email us at dawnvargas05@yahoo.com.   We would love for you to come by and hang out in our new cattery until you find the best matched cat for you!  We have many cute kittens AND young cats here at Fur Baby that are ready for their forever homes.  Come find your purrfect meowing match today!",
id: "33267037",
media: "http://photos.petfinder.com/photos/pets/33267037/1/?bust=1442078873&width=500&-x.jpg",
name: "Midnight",
sex: "M"},
{
age: "Adult",
breed: "American Shorthair",
contactEmail: "dawnvargas05@yahoo.com",
contactPhone: "213-840-0153",
description: "If you are interested in meeting any one of our cat's or kittens please call: DAWN (213) 840-0153 OR feel free to email us at dawnvargas05@yahoo.com.   We would love for you to come by and hang out in our new cattery until you find the best matched cat for you!  We have many cute kittens AND young cats here at Fur Baby that are ready for their forever homes.  Come find your purrfect meowing match today!",
id: "33267037",
media: "http://photos.petfinder.com/photos/pets/33267037/1/?bust=1442078873&width=500&-x.jpg",
name: "Midnight",
sex: "M"},
{
age: "Adult",
breed: "American Shorthair",
contactEmail: "dawnvargas05@yahoo.com",
contactPhone: "213-840-0153",
description: "If you are interested in meeting any one of our cat's or kittens please call: DAWN (213) 840-0153 OR feel free to email us at dawnvargas05@yahoo.com.   We would love for you to come by and hang out in our new cattery until you find the best matched cat for you!  We have many cute kittens AND young cats here at Fur Baby that are ready for their forever homes.  Come find your purrfect meowing match today!",
id: "33267037",
media: "http://photos.petfinder.com/photos/pets/33267037/1/?bust=1442078873&width=500&-x.jpg",
name: "Midnight",
sex: "M"}];

const action = petsSearchSuccess(pets); 
expect(action.type).toEqual('PETS_SEARCH_SUCCESS');
expect(action.pets).toEqual(pets);
	});
});

describe('petsSearchReset', ()=>{
	it('should return the action', ()=>{
		const action = petsSearchReset();
		expect(action.type).toEqual('PETS_SEARCH_RESET');
	});
});

describe('logOutUser', ()=>{
	it('should return the action', ()=>{
		const action = logOutUser();
		expect(action.type).toEqual('LOG_OUT_USER');
	});
});

describe('loginUserSuccess', ()=>{
	it('should return the action', ()=>{
		const token = '1234567890!@#$%^&*()';
		const firstName = 'Dudley';
		const lastName = 'Doright';
		const emailAddress = 'a@aol.com';
		const phoneNumber = '555-555-5555';
		const mBTI = 'INTP';
		const cats = [];
		const _id = '$$$111aaa';
		const action = loginUserSuccess(token, firstName, lastName, emailAddress, phoneNumber, mBTI, cats, _id);
		expect(action.type).toEqual('LOGIN_USER_SUCCESS');
		expect(action.firstName).toEqual(firstName);
		expect(action.lastName).toEqual(lastName);
		expect(action.emailAddress).toEqual(emailAddress);
		expect(action.phoneNumber).toEqual(phoneNumber);
		expect(action.mBTI).toEqual(mBTI);
		expect(action.cats).toEqual(cats);
		expect(action._id).toEqual(_id);
		expect(action.token).toEqual(token);
	});
});

describe('updateUserSuccess', ()=>{
	it('should return the action', ()=>{
		const firstName = 'Rick';
		const lastName = 'James';
		const emailAddress = 'super@mario.com';
		const phoneNumber = '666-867-5309';
		const mBTI = 'ENFJ';
		const action = updateUserSuccess(firstName, lastName, emailAddress, phoneNumber, mBTI);
		expect(action.type).toEqual('UPDATE_USER_SUCCESS');
		expect(action.firstName).toEqual(firstName);
		expect(action.lastName).toEqual(lastName);
		expect(action.emailAddress).toEqual(emailAddress);
		expect(action.phoneNumber).toEqual(phoneNumber);
		expect(action.mBTI).toEqual(mBTI);
	})
})

describe('deleteUserSuccess', ()=>{
	it('should return the action', ()=>{
		const action = deleteUserSuccess();
		expect(action.type).toEqual('DELETE_USER_SUCCESS');
	});
});

describe('foundADuplicate', ()=> {
	it('should return the action', ()=>{
		const action = foundADuplicate();	
		expect(action.type).toEqual('FOUND_A_DUPLICATE');
	});
});

describe('addCat', ()=> {
	it('should return the action', ()=> {
		const action = addCat();
		expect(action.type).toEqual('ADD_CAT');
	});
});

describe('updateReduxState', ()=> {
	it('should return the action', ()=> {
		const catId = '123456';
		const action = updateReduxState(catId);
		expect(action.catId).toEqual(catId);
		expect(action.type).toEqual('UPDATE_REDUX_STATE');
	});
});

describe('regsiterUser', ()=>{
	it('should dispatch registerUserSuccess', ()=> {
		const user = {id: "5a8545a19a3cd30014158c1c",
					 username: "pigman", 
					 firstName: "Pigman", 
					 lastName: "pigman", 
					 cats: []};
		global.fetch = jest.fn().mockImplementation(()=>
			Promise.resolve({
				ok: true,
				json(){
					return user;
				}
			})
		);

		const dispatch = jest.fn();
		return registerUser()(dispatch); 
		expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/users/`);
		expect(dispatch).toHaveBeenCalledWith(registerUserSuccess(user));
		
	});
});

describe('loginUser', ()=> {
	it('should dispatch loginUserSuccess', ()=> {
		const json = {
		authToken: 'asoijpasdjfpoiasdfasdfa;ldq23u4q8203uasidfj',
		userData : {firstName: "testperson", lastName: "test", emailAddress: "adria@coi.com", phoneNumber: "555-555-5555", mBTI: "ESTJ", cats: [], '_id': '123498209a8g098y09'},
		firstName : 'testperson',
		lastName : 'test',
		phoneNumber : '555-555-5555',
		emailAddress : 'a@co.com',
		mBTI : 'INTP',
		cats : [],
		_id : '5a78ffe422aa814f8q49e12'
		};
var localStorageMock = (function() {
    var store = {};
    return {
        getItem: function(key) {
            return store[key] || null;
        },
        setItem: function(key, value) {
            store[key] = value.toString();
        },
        clear: function() {
            store = {};
        }
    };
})();
Object.defineProperty(window, 'localStorage', {
     value: localStorageMock
});
		global.fetch = jest.fn().mockImplementation(()=>
			Promise.resolve({
				ok: true,
				json() {
					return json;
				}
			})
		);
		const dispatch = jest.fn();
		return loginUser()(dispatch);
		expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/auth/login/`);
		expect(dispatch).toHaveBeenCalledWith(loginUserSuccess(authToken, firstName, lastName, emailAddress, phoneNumber, mBTI, cats, _id));
	});
});

describe('persistData', ()=> {
		it('should dispatch loginUserSuccess', ()=> {
		const json = {
				authToken: 'asoijpasdjfpoiasdfasdfa;ldq23u4q8203uasidfj',
				userData : {firstName: "testperson", lastName: "test", emailAddress: "adria@coi.com", phoneNumber: "555-555-5555", mBTI: "ESTJ", cats: [], '_id': '123498209a8g098y09'},
				firstName : 'testperson',
				lastName : 'test',
				phoneNumber : '555-555-5555',
				emailAddress : 'a@co.com',
				mBTI : 'INTP',
				cats : [],
				_id : '5a78ffe422aa814f8q49e12'
				};
		global.fetch = jest.fn().mockImplementation(()=>
			Promise.resolve({
				ok: true,
				json(){
					return json;
				}
			})
		);
		const dispatch = jest.fn();
		return persistData()(dispatch);
		expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/users/persist/`);
		expect(dispatch).toHaveBeenCalledWith(loginUserSuccess(authToken, firstName, lastName, emailAddress, phoneNumber, mBTI, cats, _id));
	});
});

describe('protectedEndPointTesting', ()=> {
	it('should fetch at /api/protected', ()=>{
		const json = '231235;lj';
		global.fetch = jest.fn().mockImplementation(()=>
			Promise.resolve({
				ok: true,
				json() {
					return json;
				}
			})
		);

		const dispatch = jest.fn();
		return protectedEndPointTesting()(dispatch);
		expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/protected/`);	
	});
});

describe('updateUser', ()=> {
	it('should dispatch updateUserSuccess', ()=>{
		const json = {
				firstName : 'testperson',
				lastName : 'test',
				phoneNumber : '555-555-5555',
				emailAddress : 'a@co.com',
				mBTI : 'INTP'
				};

		global.fetch = jest.fn().mockImplementation(()=>
			Promise.resolve({
				ok: true,
				json(){
					return json;
				}
			})
		);

		const dispatch = jest.fn();
		return updateUser()(dispatch);
		expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/users`);
		expect(dispatch).toHaveBeenCalledWith(json);
	});
});


describe('deleteUser', ()=>{
	it('should dispatch deleteUserSuccess', ()=>{
		const json = {message: 'was deleted!'};
		global.fetch =jest.fn().mockImplementation(()=>
			Promise.resolve({
				ok: true,
				json(){
					return json;
				}
			})
		);

		const dispatch = jest.fn();
		return deleteUser()(dispatch);
		expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/users`);
		expect(dispatch).toHaveBeenCalledWith(json);
	});
});

describe('seekCat', ()=>{
	it('should dispatch petsSearchSuccess', ()=>{
		const json = ['bochocan'];

		global.fetch = jest.fn().mockImplementation(()=>
			Promise.resolve({
				ok: true,
				json(){
					return json;
				}
			})
		);

		const dispatch = jest.fn();
		return seekCat()(dispatch);
		expect(fetch).toHaveBeenCalledWith(`https://api.petfinder.com/pet.find?key=${petFinderKey}
			&animal=cat
			&count=10
			&breed=${breed}
			&color=${color}
			&gender=${gender}
			&age=${age}
			&location=${zipCode}
			&output=full&format=json`);
		expect(dispatch).toHaveBeenCalledWith(json);
	});
});

describe('selectCat', ()=>{
	it('should dispatch addCat', ()=>{
		const cat = {age: 'Young',
			breed:"Domestic Shorthair",
		contactEmail: 'TheLittleLionFoundation@gmail.com', 
		contactPhone:'562)-212-4411', 
		id: '40927426', 
		media: 'https://photos.petfinder.com/photos/pets/40927426/1/?bust=1518388596&width=500&-x.jpg', 
		name: 'Brandon', 
		sex:'M',
		_id: '5a7b55710dde882534dcd810'};
	global.fetch = jest.fn().mockImplementation(()=>
		Promise.resolve({
			ok:true,
			json(){
				return cat;
			}
		})
	);
	const dispatch = jest.fn();
	return selectCat()(dispatch);
	expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/users/addCat`);
	expect(dispatch).toHaveBeenCalledWith(json);
	});
});

describe('foundADuplicate', ()=>{
	it('should return the action', ()=>{
		const action = foundADuplicate();
		expect(action.type).toEqual('FOUND_A_DUPLICATE');
	});
});

describe('addCat', ()=> {
	it('should return the action', ()=>{
		const cat = {age: 'Young',
			breed:"Domestic Shorthair",
		contactEmail: 'TheLittleLionFoundation@gmail.com', 
		contactPhone:'562)-212-4411', 
		id: '40927426', 
		media: 'https://photos.petfinder.com/photos/pets/40927426/1/?bust=1518388596&width=500&-x.jpg', 
		name: 'Brandon', 
		sex:'M',
		_id: '5a7b55710dde882534dcd810'};
		const action = addCat(cat);
		expect(action.cat).toEqual(cat);
		expect(action.type).toEqual('ADD_CAT');
	});
});











