import {
	useApiGetNotices,
	// useApiPostNotice,
} from '../services/notices.service';

import {
	ADD_NEW_NOTICE,
	NOTICES_FETCH_STARTED,
	NOTICES_FETCH_SUCCEED,
	NOTICES_FETCH_FAILED,
} from '../actions/types';

export function getNotices() {
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
	fetch(`http://localhost:3000/notices`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify(noticeData),
	})
		.then(res => res.json())
		.then(notice =>
			dispatch({
				type: ADD_NEW_NOTICE,
				payload: notice,
			})
		);
};
