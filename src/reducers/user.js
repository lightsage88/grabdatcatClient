// user.js
const initialState = {
	data: {}
}

const user = (state=initialState, action) => {
	switch(action.type){
		case 'REGISTER_USER_SUCCESS':
			return {
				...state,
				data: action.user
			}
		default: 
		return state
	}
}

export default user