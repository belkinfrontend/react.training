import { useApiGetDirectories } from '../services/directories.service';

import {
	ADD_NEW_DIRECTORY,
	DIRECTORIES_FETCH_STARTED,
	DIRECTORIES_FETCH_SUCCEED,
	DIRECTORIES_FETCH_FAILED,
	ADD_NEW_DIRECTORY_STARTED,
	ADD_NEW_DIRECTORY_SUCCEED,
	ADD_NEW_DIRECTORY_FAILED,
} from './types';

export function getDirectories() {
	return dispatch => {
		dispatch({ type: DIRECTORIES_FETCH_STARTED });
		useApiGetDirectories()
			.then(result => {
				dispatch({ type: DIRECTORIES_FETCH_SUCCEED, payload: result });
			})
			.catch(error => {
				dispatch({
					type: DIRECTORIES_FETCH_FAILED,
					error: true,
					payload: error.message,
				});
			});
	};
}

export const addNewDirectory = directoryData => dispatch => {
	fetch(`http://localhost:3000/directories`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify(directoryData),
	})
		.then(res => res.json())
		.then(directory =>
			dispatch({
				type: ADD_NEW_DIRECTORY,
				payload: directory,
			})
		);
};
