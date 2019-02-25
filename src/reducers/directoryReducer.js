import { GET_DIRECTORIES, NEW_DIRECTORY } from '../actions/types';

const initialState = {
	items: [],
	item: {},
};

export function directoryReducer(state = initialState, action) {
	switch (action.type) {
		case GET_DIRECTORIES:
			console.log(action.payload);
			return { ...state, items: action.payload };

		case NEW_DIRECTORY:
			console.log(action.payload);
			return { ...state, item: action.payload };

		default:
			return state;
	}
}
