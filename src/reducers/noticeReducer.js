import {
	NOTICES_FETCH_STARTED,
	NOTICES_FETCH_SUCCEED,
	ADD_NEW_NOTICE_STARTED,
	ADD_NEW_NOTICE_SUCCEED,
	DELETE_NOTICE_STARTED,
	DELETE_NOTICE_SUCCEED,
	EDIT_NOTICE_STARTED,
	EDIT_NOTICE_SUCCEED,
	SEARCH_QUERY_CHANGED,
	CHANGE_NOTICE_POSITION_SUCCEED,
} from '../actions/types';

const initialState = {
	items: [],
	item: {},
	// currentItem: {},
	searchQuery: '',
	isLoading: false,
};

const reorder = (list, startIndex, endIndex) => {
	let result = [...list];
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	return result.map((item, idx) => {
		item.position = idx;
		return item;
	});
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

		case EDIT_NOTICE_STARTED:
			return { ...state, isLoading: true };

		case EDIT_NOTICE_SUCCEED:
			// const newState = state.items.map(item => {
			// 	if (item.id === action.payload.id) {
			// 		return action.payload;
			// 	} else {
			// 		return item;
			// 	}
			// });

			return {
				...state,
				items: state.items.map(item => {
					if (item.id === action.payload.id) {
						return action.payload;
					} else {
						return item;
					}
				}),
				isLoading: false,
			};

		case SEARCH_QUERY_CHANGED:
			return { ...state, searchQuery: action.payload };

		case CHANGE_NOTICE_POSITION_SUCCEED:
			const newNotices = reorder(
				state.items,
				action.payload.source.index,
				action.payload.destination.index
			);
			return { ...state, items: newNotices };

		default:
			return state;
	}
}
