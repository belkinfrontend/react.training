import {
	NOTICES_FETCH_STARTED,
	NOTICES_FETCH_SUCCEED,
	ADD_NEW_NOTICE,
} from '../actions/types';

const initialState = {
	items: [],
	item: {},
	loading: false,
};

export function noticeReducer(state = initialState, action) {
	switch (action.type) {
		case NOTICES_FETCH_STARTED:
			return { ...state, loading: true };

		case NOTICES_FETCH_SUCCEED:
			return { ...state, items: action.payload };

		case ADD_NEW_NOTICE:
			return { ...state, item: action.payload };

		default:
			return state;
	}
}
