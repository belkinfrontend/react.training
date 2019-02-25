import {
	useApiGetNotices,
	// useApiPostNotice,
} from '../services/notices.service';

import { GET_NOTICES, NEW_NOTICE } from '../actions/types';

export function getNotices() {
	return dispatch => {
		useApiGetNotices().then(res => {
			dispatch({ type: GET_NOTICES, payload: res });
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
				type: NEW_NOTICE,
				payload: notice,
			})
		);
};
