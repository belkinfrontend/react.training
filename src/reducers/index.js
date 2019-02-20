import { combineReducers } from 'redux';
import { noticesReducer } from './noticesReducer';
import { directoriesReducer } from './directoriesReducer';

export const rootReducer = combineReducers({
	directories: directoriesReducer,
	notices: noticesReducer,
});
