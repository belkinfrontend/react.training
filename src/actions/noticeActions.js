import {
	useApiGetNotices,
	useApiPostNotice,
	useApiDeleteNotice,
	// useApiEditNotice,
} from '../services/notices.service';

import {
	NOTICES_FETCH_STARTED,
	NOTICES_FETCH_SUCCEED,
	NOTICES_FETCH_FAILED,
	ADD_NEW_NOTICE_STARTED,
	ADD_NEW_NOTICE_SUCCEED,
	ADD_NEW_NOTICE_FAILED,
	DELETE_NOTICE_STARTED,
	DELETE_NOTICE_SUCCEED,
	DELETE_NOTICE_FAILED,
	EDIT_NOTICE_STARTED,
	// EDIT_NOTICE_SUCCEED,
	// EDIT_NOTICE_FAILED,
	SEARCH_QUERY_CHANGED,
} from '../actions/types';

export function getAllNotices() {
	return dispatch => {
		dispatch({ type: NOTICES_FETCH_STARTED });
		useApiGetNotices()
			.then(result => {
				dispatch({ type: NOTICES_FETCH_SUCCEED, payload: result });
			})
			.catch(error => {
				dispatch({
					type: NOTICES_FETCH_FAILED,
					error: true,
					payload: error.message,
				});
			});
	};
}

export const addNewNotice = noticeData => dispatch => {
	dispatch({ type: ADD_NEW_NOTICE_STARTED });
	useApiPostNotice(noticeData)
		.then(notice =>
			dispatch({
				type: ADD_NEW_NOTICE_SUCCEED,
				payload: notice,
			})
		)
		.catch(error => {
			dispatch({
				type: ADD_NEW_NOTICE_FAILED,
				error: true,
				payload: error.message,
			});
		});
};

export function deleteNotice(id) {
	return dispatch => {
		dispatch({ type: DELETE_NOTICE_STARTED });
		useApiDeleteNotice(id)
			.then(() =>
				dispatch({
					type: DELETE_NOTICE_SUCCEED,
					payload: id,
				})
			)
			.catch(error => {
				dispatch({
					type: DELETE_NOTICE_FAILED,
					error: true,
					payload: error.message,
				});
			});
	};
}

export function editNotice(id) {
	return dispatch => {
		dispatch({
			type: EDIT_NOTICE_STARTED,
			payload: id,
		});
		// useApiEditNotice(id)
		// 	.then(() =>
		// 		dispatch({
		// 			type: EDIT_NOTICE_SUCCEED,
		// 			payload: id,
		// 		})
		// 	)
		// 	.catch(error => {
		// 		dispatch({
		// 			type: EDIT_NOTICE_FAILED,
		// 			error: true,
		// 			payload: error.message,
		// 		});
		// 	});
	};
}

export function getSearchedNotices(query) {
	return dispatch => {
		// dispatch({ type: SEARCH_NOTICES_STARTED });
		dispatch({
			type: SEARCH_QUERY_CHANGED,
			payload: query,
		});
	};
}
