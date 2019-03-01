import {
	NOTICES_FETCH_STARTED,
	NOTICES_FETCH_SUCCEED,
	ADD_NEW_NOTICE_STARTED,
	ADD_NEW_NOTICE_SUCCEED,
	DELETE_NOTICE_STARTED,
	DELETE_NOTICE_SUCCEED,
	EDIT_NOTICE_STARTED,
	// EDIT_NOTICE_SUCCEED,
} from '../actions/types';

const initialState = {
	items: [],
	item: {},
	currentItem: {},
	isLoading: false,
};

export function noticeReducer(state = initialState, action) {
	switch (action.type) {
		case NOTICES_FETCH_STARTED:
			return { ...state, isLoading: true };

		case NOTICES_FETCH_SUCCEED:
			return { ...state, items: action.payload, isLoading: false };

		case ADD_NEW_NOTICE_STARTED:
			return { ...state, isLoading: true };

		case ADD_NEW_NOTICE_SUCCEED:
			return {
				...state,
				items: [...state.items, action.payload],
				isLoading: false,
			};

		case DELETE_NOTICE_STARTED:
			return { ...state, isLoading: true };

		case DELETE_NOTICE_SUCCEED:
			return {
				...state,
				items: state.items.filter(item => item.id !== action.payload),
				isLoading: false,
			};

		// case EDIT_NOTICE_STARTED:
		// 	return { ...state, isLoading: true };

		case EDIT_NOTICE_STARTED:
			return {
				...state,
				currentItem: state.items.find(
					currentItem => currentItem.id === action.payload
				),
				isLoading: false,
			};

		default:
			return state;
	}
}
