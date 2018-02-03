// index.js
 const registerUserSuccess = (user) => ({
 	type: 'REGISTER_USER_SUCCESS',
 	user
 })

export const registerUser = (userName, password) => {
	return (dispatch) => {
		//make an ajax request to our 
		//back end running at 8080 (see config.js)
		//and the api endpoint spelled out for users at server.js
		// /api/users
		fetch('http://localhost:8080/api/users/', 
			{
			method: 'POST',
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({userName, password})
		})
		.then(response => response.json())
		.then(json => console.log(json))
		.catch(error => console.log(error))
	}
}