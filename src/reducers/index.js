import { combineReducers } from 'redux';
import { noticeReducer } from './noticeReducer';
import { directoryReducer } from './directoryReducer';

export default combineReducers({
	notices: noticeReducer,
	directories: directoryReducer,
});
