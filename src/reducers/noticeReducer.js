import {
	NOTICES_FETCH_STARTED,
	NOTICES_FETCH_SUCCEED,
	ADD_NEW_NOTICE,
} from '../actions/types';

const initialState = {
	items: [],
	item: {},
	isLoading: false,
};

export function noticeReducer(state = initialState, action) {
	switch (action.type) {
		case NOTICES_FETCH_STARTED:
			return { ...state, isLoading: true };

		case NOTICES_FETCH_SUCCEED:
			return { ...state, items: action.payload, isLoading: false };

		case ADD_NEW_NOTICE:
			return { ...state, items: [...state.items, action.payload] };

		default:
			return state;
	}
}
