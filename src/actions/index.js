// index.js
var jsonp = require('jsonp');
require('es6-promise').polyfill();


const petFinderKey = '141daf9adb9dfd50fd537d41985f5773';



 const registerUserSuccess = (user) => ({
 	type: 'REGISTER_USER_SUCCESS',
 	user
 });

 export const petsSearchSuccess = (pets) =>({
 	type: 'PETS_SEARCH_SUCCESS',
 	pets
 });

 export const logOutUser = () => ({
 	type: 'LOG_OUT_USER'
 });


 export const loginUserSuccess = (token, firstName, lastName, emailAddress, phoneNumber, mBTI, cats, _id ) => ({
 	type: 'LOGIN_USER_SUCCESS',
 	token,
 	firstName,
 	lastName, 
 	emailAddress,
 	phoneNumber,
 	mBTI,
 	cats,
 	_id
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
		fetch('http://localhost:8080/api/users/', 
			{
			method: 'POST',
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({username, password, firstName, lastName, phoneNumber, emailAddress, mBTI})
		})
		.then(response => response.json())
		.then(json => {
			console.log('for to get data stuff');
			console.log(json);
			const {firstName, lastName, phoneNumber, emailAddress, mBTI, cats, _id } = json;
			console.log(firstName);
			dispatch(registerUserSuccess(json))
			window.location = '/';
		})
		.catch(error => {
			console.log('todays attempt has been brought to you by the letter F for fucked in the head');
			console.log(error);

			console.error(error);
		})
	}
}


export const loginUser = (username, password) => {
	return (dispatch) => {
		fetch('http://localhost:8080/api/auth/login/', 
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
			const firstName = userData.firstName;
			const lastName = userData.lastName;
			const phoneNumber = userData.phoneNumber;
			const emailAddress = userData.emailAddress;
			const mBTI = userData.mBTI;
			const cats = userData.cats;
			const _id = userData._id;
			localStorage.setItem('token', authToken);
			localStorage.setItem('userData', userData);
			localStorage.setItem('firstName', userData.firstName);
			localStorage.setItem('lastName', userData.lastName);
			localStorage.setItem('emailAddress', userData.emailAddress);
			localStorage.setItem('phoneNumber', userData.phoneNumber);
			localStorage.setItem('mBTI', userData.mBTI);
			localStorage.setItem('cats', userData.cats);
			localStorage.setItem('_id', userData._id);
			dispatch(loginUserSuccess(authToken, firstName, lastName, emailAddress, phoneNumber, mBTI, cats, _id));
			console.log(username);
			console.log(password);
			// dispatch(userDataGrab(username,password));
		})
		.catch(error => console.log(error))
	}
}

export const protectedEndPointTesting = () => {
	return (dispatch) => {
		const token = localStorage.getItem('token');
		fetch('http://localhost:8080/api/protected/', 
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
		fetch('http://localhost:8080/api/users', 
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
		fetch('http://localhost:8080/api/users',
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
	console.log(age);
	return(dispatch)=>{
		jsonp(`http://api.petfinder.com/pet.find?key=${petFinderKey}
			&animal=cat
			&count=10
			&breed=${breed}
			&color=${color}
			&gender=${gender}
			&age=${age}
			&location=${zipCode}
			&output=full&format=json`, null, function(err,data){
			if(err){
				console.error(err.message);
			} else {
				console.log(data);
				console.log(data.petfinder.pets);
				//we want to put these cats in their own temporary state upon searching for them. 
				//when the page reloads, we will lose the cats
				if(!data.petfinder.pets){
					console.log('nope');
				} else{
				let pets = data.petfinder.pets.pet;
				console.log(pets);
				const {contact, age, media, id, breeds, name, sex, description} = pets;
				let petArray=[];
				for(let i=0; i<=pets.length-1; i++){
					// const animal=pets[i];
					// console.log(animal);
					// petArray.push(pets[i]);
					let pet = {
						age: pets[i].age.$t,
						sex: pets[i].sex.$t
						//FINISH ITERATING OVER PROP=KEY PAIRS
					};
					petArray.push(pet)

				}
				dispatch(petsSearchSuccess(petArray));
				
//we can...create an empty array --- 


				// dispatch(getHopefuls(pets));
			}
		}
		});
	}
}