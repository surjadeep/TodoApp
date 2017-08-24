import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import todos from './todos';
import utilities from './utilities';

const rootReducer = combineReducers({
	todos,
	utilities,
	routing: routerReducer 
});

export default rootReducer;
