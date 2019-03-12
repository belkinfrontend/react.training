import {
	DIRECTORIES_FETCH_STARTED,
	DIRECTORIES_FETCH_SUCCEED,
	ADD_NEW_DIRECTORY_STARTED,
	ADD_NEW_DIRECTORY_SUCCEED,
	ADD_NEW_DIRECTORY_FAILED,
	DELETE_DIRECTORY_STARTED,
	DELETE_DIRECTORY_SUCCEED,
} from '../actions/types';

const initialState = {
	items: [],
	item: {},
	isLoading: false,
	error: null,
};

export function directoryReducer(state = initialState, action) {
	switch (action.type) {
		case DIRECTORIES_FETCH_STARTED:
			return { ...state, isLoading: true };

		case DIRECTORIES_FETCH_SUCCEED:
			return { ...state, items: action.payload, isLoading: false };

		case ADD_NEW_DIRECTORY_STARTED:
			return { ...state, isLoading: true };

		case ADD_NEW_DIRECTORY_SUCCEED:
			return {
				...state,
				items: [...state.items, action.payload],
				isLoading: false,
			};
		case ADD_NEW_DIRECTORY_FAILED:
			return {
				...state,
				error: { message: 'generic message' },
				isLoading: false,
			};

		case DELETE_DIRECTORY_STARTED:
			return { ...state, isLoading: true };

		case DELETE_DIRECTORY_SUCCEED:
			return {
				...state,
				items: state.items.filter(item => item.id !== action.payload),
				isLoading: false,
			};

		default:
			return state;
	}
}
