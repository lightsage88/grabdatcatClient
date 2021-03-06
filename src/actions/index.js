// index.js
import pic from '../staticAssets/blackCatAroundCorner.jpg';

var jsonp = require('jsonp');
require('es6-promise').polyfill();
const {API_BASE_URL} = require('../config');
const petFinderKey = '141daf9adb9dfd50fd537d41985f5773';



 export const registerUserSuccess = (user) => ({
 	type: 'REGISTER_USER_SUCCESS',
 	user
 });

 export const petsSearchSuccess = (pets) =>({
 	type: 'PETS_SEARCH_SUCCESS',
 	pets
 });

 export const petsSearchReset = () =>({
 	type: 'PETS_SEARCH_RESET'
 });

 export const logOutUser = () => ({
 	type: 'LOG_OUT_USER'
 });

export const loginFail = () => ({
	type: 'LOGIN_FAIL'
});

 export const loginUserSuccess = (token, firstName, lastName, emailAddress, phoneNumber, mBTI, cats, _id, username ) => ({
 	type: 'LOGIN_USER_SUCCESS',
 	token,
 	firstName,
 	lastName, 
 	emailAddress,
 	phoneNumber,
 	mBTI,
 	cats,
 	_id,
 	username
 });

 export const updateUserSuccess = (firstName, lastName, emailAddress, phoneNumber, mBTI) => ({
 	type: 'UPDATE_USER_SUCCESS',
 	firstName,
 	lastName,
 	emailAddress,
 	phoneNumber,
 	mBTI
 }); 

 export const deleteUserSuccess = () =>({
 	type: 'DELETE_USER_SUCCESS'
 });

export const registerUser = (username, password, firstName, lastName, phoneNumber, emailAddress, mBTI) => {
	return (dispatch) => {
		fetch(`${API_BASE_URL}/api/users/`, 
			{
			method: 'POST',
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({username, password, firstName, lastName, phoneNumber, emailAddress, mBTI})
		})
		.then(response => response.json())
		.then(json => {
			if(json.code===422){
				dispatch(loginFail());
				setTimeout(()=>{
					window.location.reload();
				},2500);
				return;
			} else{
			console.log('for to get data stuff');
			console.log(json);
						
			dispatch(registerUserSuccess(json));
			window.location = '/';
		}})
		.catch(error => {
			console.log('todays attempt has been brought to you by the letter F for fucked in the head');
			console.log(error);

			console.error(error);
		})
	}
}


export const loginUser = (username, password) => {
	return (dispatch) => {
		fetch(`${API_BASE_URL}/api/auth/login/`, 
			{
			method: 'POST',
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({username, password})
		})
		.then(response => response.json())
		.then(json => {
			const {authToken} = json;
			const {userData} = json;
			console.log(userData);
			const username = userData.username;
			const firstName = userData.firstName;
			const lastName = userData.lastName;
			const phoneNumber = userData.phoneNumber;
			const emailAddress = userData.emailAddress;
			const mBTI = userData.mBTI;
			const cats = userData.cats;
			const _id = userData._id;
			localStorage.setItem('token', authToken);
			localStorage.setItem('username', username);
			localStorage.setItem('userData', userData);
			localStorage.setItem('firstName', userData.firstName);
			localStorage.setItem('lastName', userData.lastName);
			localStorage.setItem('emailAddress', userData.emailAddress);
			localStorage.setItem('phoneNumber', userData.phoneNumber);
			localStorage.setItem('mBTI', userData.mBTI);
			localStorage.setItem('cats', userData.cats);
			localStorage.setItem('_id', userData._id);
			dispatch(loginUserSuccess(authToken, firstName, lastName, emailAddress, phoneNumber, mBTI, cats, _id, username));

			window.location = '/home';
		
		})
		.catch(error => {
			console.error(error);
			console.log(error);
			dispatch(loginFail());
			setTimeout(()=>{
				dispatch(logOutUser())
			}, 3000);
		});
	}
}

export const persistData = (mLabId) => {
	console.log('persistData running from action index');
	return (dispatch) => {
		fetch(`${API_BASE_URL}/api/users/persist/`, 
			{
			method: 'POST',
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({mLabId})
		})
		.then(response => response.json())
		.then(json => {
			const userData = json;
			const authToken = localStorage.getItem('token');
			const firstName = userData.firstName;
			const lastName = userData.lastName;
			const phoneNumber = userData.phoneNumber;
			const emailAddress = userData.emailAddress;
			const mBTI = userData.mBTI;
			const cats = userData.cats;
			const _id = userData._id;
			const username = userData.username;
			dispatch(loginUserSuccess(authToken, firstName, lastName, emailAddress, phoneNumber, mBTI, cats, _id, username ));
		})
		.catch(error => console.log(error));
	}
}

export const protectedEndPointTesting = () => {
	return (dispatch) => {
		const token = localStorage.getItem('token');
		fetch(`${API_BASE_URL}/api/protected/`, 
			{
			method: 'GET',
			headers:{
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
		.then(response => response.json())
		.then(json => console.log(json))
		.catch(error => console.log(error))
	}
}


export const updateUser = (_id, firstName, lastName, emailAddress, phoneNumber, mBTI) => {
	return (dispatch) => {
		fetch(`${API_BASE_URL}/api/users`, 
			{
			method: 'PUT',
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({_id, firstName, lastName, emailAddress, phoneNumber, mBTI})
		})
		.then(response => response.json())
		.then(json => {
			console.log('razzlematozoo');
			console.log(json);
			console.log(json.firstName);
			let firstName = json.firstName;
			let lastName = json.lastName;
			let emailAddress = json.emailAddress;
			let phoneNumber = json.phoneNumber;
			let mBTI = json.mBTI;
			dispatch(updateUserSuccess(firstName, lastName, emailAddress, phoneNumber, mBTI));
			window.location = '/account';
		})
		.catch(error => console.log(error))
	}
}

export const deleteUser = (id) =>{
	return(dispatch) => {
		fetch(`${API_BASE_URL}/api/users`,
		{
			method: "DELETE",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({id})
		})
		.then(response => {
			console.log(response);
			dispatch(deleteUserSuccess());
			window.location = '/';
		})		
		.catch(error => console.log(error))
	}
}

export const seekCat = (breed, color, gender, age, zipCode, distance) => {
	console.log('...seekCat action beind dispatched...');
	console.log(breed, color, gender, age, zipCode);
	return(dispatch)=>{
		jsonp(`https://api.petfinder.com/pet.find?key=${petFinderKey}
			&animal=cat
			&count=25
			&breed=${breed}
			&color=${color}
			&sex=${gender}
			&age=${age}
			&location=${zipCode}
			&output=full&format=json`, null, function(err,data){
			if(err){
				console.error(err.message);
			} else {
				console.log(data);
				console.log(data.petfinder.pets);
				
				if(!data.petfinder.pets){
					console.log('nope');
					dispatch(noCatsFound());
					setTimeout(()=>{
						dispatch(petsSearchReset());
					}, 3000);
					
				} else{
				let pets = data.petfinder.pets.pet;
				console.log(pets);
				let petArray=[];
				for(let i=0; i<=pets.length-1; i++){
					let media = pic;
					if(pets[i].media.photos){
						media = pets[i].media.photos.photo[2].$t;
					}
					let pet = {
						age: pets[i].age.$t,
						breed: pets[i].breeds.breed.$t,
						contactEmail: pets[i].contact.email.$t,
						contactPhone: pets[i].contact.phone.$t,
						description: pets[i].description.$t,
						id: pets[i].id.$t,
						media,
						name: pets[i].name.$t,
						sex: pets[i].sex.$t
					};
					petArray.push(pet)
				}
				dispatch(petsSearchSuccess(petArray));
			}
		}
		});
	}
}

export const noCatsFound = () => ({
	type: 'NO_CATS_FOUND'
});


export const selectCat = (cat, userPets, mLabId) => {
	return (dispatch) => {

		
		fetch(`${API_BASE_URL}/api/users/addCat`, 
			{
			method: 'PUT',
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({cat, mLabId})
		})
		.then(response =>response.json())
		.then(json => {
			dispatch(addCat(cat));
		})
		.catch(error => console.log(error));
	}
}

export const foundADuplicate = () => ({
	type: 'FOUND_A_DUPLICATE'
});
	
export const addCat = (cat) => ({
	type: 'ADD_CAT',
	cat
});


export const roundUpCats = (mLabId) => {
	return (dispatch) => {
		fetch(`${API_BASE_URL}/api/users/roundUpCats`,
			{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({mLabId})
		})
		.then(response => response.json())
		.then(json => {
			
			console.log('..roundUpCats ran!');
			console.log(json);
		})
		.catch(error => console.log(error));
	}
}
 
export const deleteCat = (mLabId, catId) => {
	return (dispatch) => {
		fetch(`${API_BASE_URL}/api/users/deleteCat`,
		{
			method: 'PUT',
			headers: {
				'Content-Type':'application/json'
			},
			body: JSON.stringify({mLabId, catId})
		})
		.then(response => response.json())
		.then(json => {
			console.log('finished delete cat so far...');
			console.log(json);
			dispatch(updateReduxState(catId));
			window.location = '/kennel';
		})
		.catch(error => console.log(error));
	}
}

export const updateReduxState = (catId) => ({
	type: 'UPDATE_REDUX_STATE',
	catId
});






