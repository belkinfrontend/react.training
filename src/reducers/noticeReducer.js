import { GET_NOTICES, NEW_NOTICE } from '../actions/types';

const initialState = {
	items: [],
	item: {},
};

export function noticeReducer(state = initialState, action) {
	switch (action.type) {
		case GET_NOTICES:
			console.log(action.payload);
			return { ...state, items: action.payload };

		case NEW_NOTICE:
			console.log(action.payload);
			return { ...state, item: action.payload };

		default:
			return state;
	}
}
