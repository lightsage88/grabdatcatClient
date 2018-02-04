// index.js
 const registerUserSuccess = (user) => ({
 	type: 'REGISTER_USER_SUCCESS',
 	user
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
 })

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
		.catch(error => console.log(error))
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
			console.log(authToken);
			localStorage.setItem('token', authToken);
			localStorage.setItem('userData', userData);
			localStorage.setItem('firstName', userData.firstName);
			localStorage.setItem('lastName', userData.lastName);
			localStorage.setItem('emailAddress', userData.emailAddress);
			localStorage.setItem('phoneNumber', userData.phoneNumber);
			localStorage.setItem('mBTI', userData.mBTI);
			localStorage.setItem('cats', userData.cats);
			localStorage.setItem('_id', userData._id);
			dispatch(loginUserSuccess(authToken));
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
