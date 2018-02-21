// index.js
import {combineReducers} from 'redux';
import user from './user';
import pets from './pets';

const rootReducer = combineReducers({
	user,
	petsReducer: pets
})

export default rootReducer