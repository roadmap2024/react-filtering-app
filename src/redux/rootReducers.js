import { combineReducers } from 'redux';
import { CardReducers } from './reducers/cardReducers';

const rootReducers = combineReducers({
	CardReducers,
});

export default rootReducers;