// index.js
 const registerUserSuccess = (user) => ({
 	type: 'REGISTER_USER_SUCCESS',
 	user
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
		.then(json => dispatch(registerUserSuccess(json)))
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
			// let firstName = json.firstName;
			// let lastName = json.lastName;
			// let emailAddress = json.emailAddress;
			// let phoneNumber = json.phoneNumber;
			// let mBTI = json.mBTI;
			// dispatch(updateUserSuccess(firstName, lastName, emailAddress, phoneNumber, mBTI));
		})
		.catch(error => console.log(error))
	}
}