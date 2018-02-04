// user.js
// let userData;
const initialState = {
	data: {},
	token: '',
	firstName: '',
	lastName: '',
	emailAddress: '',
	phoneNumber: '',
	mBTI : '',
	cats: [],
	_id: ''
}

const user = (state=initialState, action) => {
	switch(action.type){
		case 'REGISTER_USER_SUCCESS':
			return {
				...state,
				data: action.user
			}
		case 'LOGIN_USER_SUCCESS':
			return {
				...state,
				token: action.token,
				firstName: action.firstName,
				lastName: action.lastName,
				phoneNumber: action.phoneNumber,
				emailAddress: action.emailAddress,
				mBTI: action.mBTI,
				cats: action.cats,
				_id: action._id
			}
		case 'LOG_OUT_USER':
			return {}
		
		default: 
		return state
	}
}

export default user


////turn the parts in USERDATA into smaller parts that wont get generalized
//into a large object...THAT will easily persist across the entire project!