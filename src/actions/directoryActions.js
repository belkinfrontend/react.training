import {
	useApiGetDirectories,
	// useApiPostNotice,
} from '../services/directories.service';

import { GET_DIRECTORIES, NEW_DIRECTORY } from './types';

export function getDirectories() {
	return dispatch => {
		useApiGetDirectories().then(res => {
			dispatch({ type: GET_DIRECTORIES, payload: res });
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
				type: NEW_DIRECTORY,
				payload: directory,
			})
		);
};
