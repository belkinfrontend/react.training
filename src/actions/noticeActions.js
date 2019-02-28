import {
	useApiGetNotices,
	useApiDeleteNotice,
	// useApiPostNotice,
} from '../services/notices.service';

import {
	ADD_NEW_NOTICE,
	NOTICES_FETCH_STARTED,
	NOTICES_FETCH_SUCCEED,
	NOTICES_FETCH_FAILED,
	DELETE_NOTICE_STARTED,
	DELETE_NOTICE_SUCCEED,
	DELETE_NOTICE_FAILED,
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
	return fetch(`http://localhost:3000/notices`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify(noticeData),
	})
		.then(res => {
			return res.json();
		})
		.then(notice =>
			dispatch({
				type: ADD_NEW_NOTICE,
				payload: notice,
			})
		);
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
