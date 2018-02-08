// pets.js// user.js
// let userData;
const initialState = {
	pets:[]
}

const pets = (state=initialState, action) => {
	switch(action.type){

		case 'PETS_SEARCH_RESET':
		return 	{}
		
		

		case 'PETS_SEARCH_SUCCESS':
			return {
				...state, 
				pets: action.pets
			}

		case 'LOG_OUT_USER':
			return {}


		

		
		default: 
		return state
	}
}

export default pets


////turn the parts in USERDATA into smaller parts that wont get generalized
//into a large object...THAT will easily persist across the entire project!