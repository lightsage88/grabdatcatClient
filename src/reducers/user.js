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
	_id: '',
	catPresent: '',
	validLogin: ''
}


// DELETE_ITEM: (state, action) => ({
//   ...state,
//   items: state.items.filter(item => item !== action.payload),
//   lastUpdated: Date.now() 
// })

const user = (state=initialState, action) => {
	switch(action.type){

		case 'UPDATE_REDUX_STATE':
		console.log('tooling up URS action in reducer...');
		console.log(state.cats);
		let reduxCats = state.cats;
		console.log(action.catId);
		for(let i=0; i<=reduxCats.length-1; i++){
			if(reduxCats[i].id === action.catId){
				console.log('baaaaaam');
			}
		}
		return [
			...state,{
			cats: state.cats.filter(item => item.id !== action.catId)
		}
		]

		case 'FOUND_A_DUPLICATE':
		return {...state,
			activeButton: true
		}


		case 'ADD_CAT':
			return {
				...state, 
				cats: [...state.cats, action.cat]
			}

		case 'NO_CATS_FOUND':
			// setInterval(()=>{
			// 	return {...state, catPresent: false}
			// },3000);


			return {
				...state, catPresent: false
				
			}
			

		case 'PETS_SEARCH_SUCCESS':
			return {
				...state, catPresent: ''
			}

		case 'PETS_SEARCH_RESET':
			return {
				...state, catPresent: ''
			}

		case 'LOGIN_FAIL':
			return {
				...state, validLogin: false
			}




		case 'REGISTER_USER_SUCCESS':
			return {
				
			}
		case 'LOGIN_USER_SUCCESS':
			return Object.assign({}, state,{
				token: action.token,
				firstName: action.firstName,
				lastName: action.lastName,
				phoneNumber: action.phoneNumber,
				emailAddress: action.emailAddress,
				mBTI: action.mBTI,
				cats: action.cats,
				_id: action._id
			})
		
			
		case 'UPDATE_USER_SUCCESS':
			return Object.assign({}, state, {
				firstName: action.firstName,
				lastName: action.lastName,
				emailAddress: action.emailAddress,
				phoneNumber:action.phoneNumber,
				mBTI: action.mBTI}
				)
		case 'LOG_OUT_USER':
			return {}
		

		case 'DELETE_USER_SUCCESS':
			return {}

		
		default: 
		return {}
	}
}

export default user


////turn the parts in USERDATA into smaller parts that wont get generalized
//into a large object...THAT will easily persist across the entire project!