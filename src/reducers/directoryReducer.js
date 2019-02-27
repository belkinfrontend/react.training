import {
	DIRECTORIES_FETCH_STARTED,
	DIRECTORIES_FETCH_SUCCEED,
	ADD_NEW_DIRECTORY,
	// ADD_NEW_DIRECTORY_STARTED,
	// ADD_NEW_DIRECTORY_SUCCEED,
} from '../actions/types';

const initialState = {
	items: [],
	item: {},
	isLoading: false,
};

export function directoryReducer(state = initialState, action) {
	switch (action.type) {
		case DIRECTORIES_FETCH_STARTED:
			return { ...state, isLoading: true };

		case DIRECTORIES_FETCH_SUCCEED:
			return { ...state, items: action.payload, isLoading: false };

		// case ADD_NEW_DIRECTORY_STARTED:
		// 	return { ...state, isLoading: true };

		case ADD_NEW_DIRECTORY:
			return { ...state, item: action.payload, isLoading: false };

		default:
			return state;
	}
}
